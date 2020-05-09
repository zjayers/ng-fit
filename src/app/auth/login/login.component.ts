import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UiService } from '../../shared/ui.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../app.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private uiService: UiService,
    private store: Store<{ ui: fromApp.State }>
  ) {}

  isLoading: Observable<boolean>;

  ngOnInit(): void {
    this.isLoading = this.store.pipe(map((state) => state.ui.isLoading));
  }

  onSubmit(form: NgForm) {
    this.auth.login({ email: form.value.email, password: form.value.password });
  }
}
