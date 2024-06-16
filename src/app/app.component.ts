import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { PersonListComponent } from '../person-list/person-list.component';
import { ProfileDetailsComponent } from '../profile-details/profile-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListComponent,PersonListComponent,ProfileDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-projects';
}
