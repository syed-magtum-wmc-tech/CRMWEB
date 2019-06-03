import { Component, EventEmitter, Output } from '@angular/core';

import * as screenfull from 'screenfull';
import { AuthenticationService } from '../../services/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output()
  toggleSidenav = new EventEmitter<void>();
  @Output()
  toggleNotificationSidenav = new EventEmitter<void>();

  constructor(private authenticationService: AuthenticationService) {

  }

  fullScreenToggle(): void {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }

  signOut(): void {
    this.authenticationService.logout();
  }

}
