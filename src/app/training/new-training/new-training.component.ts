import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  constructor(private trainingService: TrainingService, private firestore: AngularFirestore) {}

  exercises: Observable<any>;

  ngOnInit(): void {
    this.exercises = this.firestore.collection('availableExercises').valueChanges();
  }

  onStartTraining(form: NgForm) {
    console.log(form);
    this.trainingService.startEx(form.value.exercise);
  }
}
