import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.css'],
})
export class SideNavListComponent implements OnInit, OnDestroy {
  @Output() closeSideNav = new EventEmitter<void>();

  constructor(private auth: AuthService) {}

  isAuth: boolean;
  authSubscription: Subscription;

  ngOnInit(): void {
    this.authSubscription = this.auth.authChange.subscribe((authStatus) => {
      this.isAuth = authStatus;
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  onClose() {
    this.closeSideNav.emit();
  }

  onLogout() {
    this.onClose();
    this.auth.logout();
  }
}
