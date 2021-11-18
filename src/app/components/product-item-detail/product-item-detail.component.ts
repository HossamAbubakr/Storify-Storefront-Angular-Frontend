import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
  };
  id: number = 0;
  quantity: number = 1;
  //https://stackoverflow.com/a/47382088
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.productService.getProducts().subscribe((products) => {
      this.product = products.filter((p) => p.id === this.id)[0];
    });
  }

  addToCart() { // 1 Cup has / 2 Cup(s) have been added
    this.cartService.addItem({ product: this.product, quantity: this.quantity  });
    alert(`${this.quantity} ${this.product.name}${this.quantity > 1 ? '(s) have' : ' has'} been added to your cart.`);
  }
}
