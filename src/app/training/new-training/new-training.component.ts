import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  constructor(private trainingService: TrainingService) {}

  exercises: Exercise[];
  exSub: Subscription;

  ngOnInit() {
    this.exSub = this.trainingService
      .fetchAvailableExercises()
      .subscribe((result) => {
        this.exercises = result;
      });
  }

  ngOnDestroy() {
    if (this.exSub) {
      this.exSub.unsubscribe();
    }
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startEx(form.value.exercise);
  }
}
