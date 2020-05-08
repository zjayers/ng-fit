import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  constructor(private trainingService: TrainingService) {}

  exercises: Exercise[] = [];

  ngOnInit(): void {
    this.exercises = this.trainingService.getExercises();
  }

  onStartTraining(form: NgForm) {
    console.log(form);
    this.trainingService.startEx(form.value.exercise);
  }
}
