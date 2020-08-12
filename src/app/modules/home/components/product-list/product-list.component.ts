import { Component, OnInit } from '@angular/core';
import { Product } from './../../../../shared/models/product.model';
import { ProductsService } from '../../../../shared/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.productsService.sendGetRequest().subscribe(
      (data: any[]) => {
        this.products = data;
      }
    );
  }

}
