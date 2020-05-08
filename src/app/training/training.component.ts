import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit, OnDestroy {
  ongoingTraining = false;
  exSub: Subscription;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.exSub = this.trainingService.exChanged.subscribe((ex) => {
      if (ex) {
        this.ongoingTraining = true;
      } else {
        this.ongoingTraining = false;
      }
    });
  }

  ngOnDestroy(): void {}
}
