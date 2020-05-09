import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './signup/auth-data.model';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth/';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UiService } from '../shared/ui.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../app.reducer';
import { START_LOADING, STOP_LOADING } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authChange = new Subject<boolean>();

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private uiService: UiService,
    private store: Store<{ ui: fromApp.State }>
  ) {}

  private isAuthenticated = false;

  initAuthListener() {
    this.fireAuth.authState.subscribe((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigateByUrl('training');
      } else {
        this.isAuthenticated = false;
        this.authChange.next(false);
        this.router.navigateByUrl('');
      }
    });
  }

  registerUser(authData: AuthData) {
    this.store.dispatch({ type: START_LOADING });
    this.fireAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(() => {
        this.store.dispatch({ type: STOP_LOADING });
      })
      .catch((err) => {
        this.store.dispatch({ type: STOP_LOADING });
      });
  }

  login(authData: AuthData) {
    this.store.dispatch({ type: START_LOADING });
    this.fireAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(() => {
        this.store.dispatch({ type: STOP_LOADING });
      })
      .catch(() => {
        this.store.dispatch({ type: STOP_LOADING });
        this.uiService.showSnackBar('Invalid email or password');
      });
  }

  logout() {
    this.fireAuth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }
}
