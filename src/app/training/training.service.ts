import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, catchError } from 'rxjs/operators';
import { UiService } from '../shared/ui.service';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  constructor(
    private firestore: AngularFirestore,
    private uiService: UiService
  ) {}

  exChanged = new Subject<Exercise>();

  private availExercises: Exercise[] = [];
  private runningEx: Exercise;

  fetchAvailableExercises() {
    return this.firestore
      .collection('availableExercises')
      .snapshotChanges()
      .pipe(
        map((docArray) => {
          return (this.availExercises = docArray.map((doc) => {
            const data: any = doc.payload.doc.data();
            return {
              id: doc.payload.doc.id,
              ...data,
            };
          }));
        }),
        catchError((err) => {
          this.uiService.showSnackBar(
            'Fetching exercises failed, please try again later.'
          );
          return of(err);
        })
      );
  }

  startEx(selectedId: string) {
    this.runningEx = this.availExercises.find((ex) => ex.id === selectedId);
    this.exChanged.next({ ...this.runningEx });
  }

  completeEx() {
    this.addDataToDatabase({
      ...this.runningEx,
      date: new Date(),
      state: 'completed',
    });
    this.runningEx = null;
    this.exChanged.next(null);
  }

  cancelEx(progress: number) {
    this.addDataToDatabase({
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

  fetchCompletedOrCancelledExercises() {
    return this.firestore
      .collection('finishedExs')
      .valueChanges()
      .pipe(
        map((exercises) => {
          return exercises.map((exercise: any) => {
            exercise.date = exercise.date.toDate();
            return exercise;
          });
        }),
        catchError((err) => {
          return of(err);
        })
      );
  }

  private addDataToDatabase(exercise: Exercise) {
    this.firestore.collection('finishedExs').add(exercise);
  }
}
