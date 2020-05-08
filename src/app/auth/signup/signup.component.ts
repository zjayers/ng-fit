import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private auth: AuthService) {}

  maxDate: Date;
  authorizedAgeForEntry = 18;

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(
      this.maxDate.getFullYear() - this.authorizedAgeForEntry
    );
  }

  onSubmit(form: NgForm) {
    this.auth.login({ email: form.value.email, password: form.value.password });
  }
}
