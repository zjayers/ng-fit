import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  constructor() {}

  private availExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
  ];

  private runningEx: Exercise;
  exChanged = new Subject<Exercise>();
  completedExs: Exercise[] = [];

  getExercises() {
    return this.availExercises.slice();
  }

  startEx(selectedId: string) {
    this.runningEx = this.availExercises.find((ex) => ex.id === selectedId);
    this.exChanged.next({ ...this.runningEx });
  }

  completeEx() {
    this.completedExs.push({
      ...this.runningEx,
      date: new Date(),
      state: 'completed',
    });
    this.runningEx = null;
    this.exChanged.next(null);
  }

  cancelEx(progress: number) {
    this.completedExs.push({
      ...this.runningEx,
      duration: this.runningEx.duration * (progress / 100),
      calories: this.runningEx.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled',
    });
    this.runningEx = null;
    this.exChanged.next(null);
  }

  getRunningEx() {
    return { ...this.runningEx };
  }

  getAllExs() {
    return this.completedExs.slice();
  }
}
