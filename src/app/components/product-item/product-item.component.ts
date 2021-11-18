import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<CartItem> = new EventEmitter();
  quantity: number = 1;
  
  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {}

  sendToCart(): void {
    this.addToCart.emit({ product: this.product, quantity: this.quantity  });
  }
}
