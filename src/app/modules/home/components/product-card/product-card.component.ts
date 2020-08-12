import { Product } from './../../../../shared/models/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productItem: Product;
  constructor() { }

  ngOnInit() {
  }

}
