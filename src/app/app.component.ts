import { Component } from '@angular/core';
import { UiUserDetails } from './ui/user-details/components/user-details/user-details.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly user: UiUserDetails = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@abc.efd',
    avatar: {
      url: 'https://placehold.it/100x100',
      alt: 'John Smith avatar',
    },
  };
}
