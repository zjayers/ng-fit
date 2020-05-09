import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UiService } from '../../shared/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  constructor(private auth: AuthService, private uiService: UiService) {}

  maxDate: Date;
  authorizedAgeForEntry = 18;

  isLoading = false;
  private isLoadingSub: Subscription;

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(
      this.maxDate.getFullYear() - this.authorizedAgeForEntry
    );

    this.isLoadingSub = this.uiService.loadingStateChanged.subscribe(
      (isLoading) => {
        this.isLoading = isLoading;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.isLoadingSub) {
      this.isLoadingSub.unsubscribe();
    }
  }

  onSubmit(form: NgForm) {
    this.auth.registerUser({
      email: form.value.email,
      password: form.value.password,
    });
  }
}
