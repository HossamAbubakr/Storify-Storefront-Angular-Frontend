import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(cartItem: CartItem) {
    this.cartService.addItem(cartItem);
    alert(`${cartItem.quantity} ${cartItem.product.name}${cartItem.quantity > 1 ? '(s) have' : ' has'} been added to your cart.`);
  }
}
