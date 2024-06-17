import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { PersonListComponent } from '../person-list/person-list.component';
import { ProfileDetailsComponent } from '../profile-details/profile-details.component';
import { ProductsComponent } from '../products/products.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListComponent,PersonListComponent,ProfileDetailsComponent,ProductListComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-projects';

  @Input() product : any;
}
