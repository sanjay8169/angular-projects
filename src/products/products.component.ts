import { Component,Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { product } from '../types/product.type';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() product : string  = "hello";
}
