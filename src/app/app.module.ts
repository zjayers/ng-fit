import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// ANGULAR FIRE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// CUSTOM MODULES
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

// COMPONENTS
import { HeaderComponent } from './nav/header/header.component';
import { SideNavListComponent } from './nav/side-nav-list/side-nav-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// SERVICES
import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';
import { UiService } from './shared/ui.service';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SideNavListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SharedModule,
    AuthModule,
    StoreModule.forRoot({ ui: appReducer }, {}),
  ],
  providers: [AuthService, TrainingService, UiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
