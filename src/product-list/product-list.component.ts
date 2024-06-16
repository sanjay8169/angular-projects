import { Component } from '@angular/core';
import { product } from '../types/product.type';
import { ProductsComponent } from '../products/products.component';
import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductsComponent,AppComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  count : number  = 0;

  incrementcount():number{
    return this.count++;
  }

  para  : string = "hii welcome";

 products : any[] = [{
   id: this.incrementcount(),
   name: 'Formal Shirt',
   brand: 'H&M',
   cost: 1200,
   category: 'cloth',
   discount: 30
 },
 {
   id: this.incrementcount(),
   name: 'Iphone 15 pro',
   brand: 'Iphone',
   cost: 120000,
   category: 'Mobile',
   discount: 5
 },
{
  id: this.incrementcount(),
  name: 'Mac Book',
  brand: 'Iphone',
  cost: 52000,
  category: 'Laptop',
  discount: 40
}];
 
}
