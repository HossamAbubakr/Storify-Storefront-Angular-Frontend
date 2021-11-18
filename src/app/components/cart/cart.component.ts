import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  itemsPrice: number = 0;
  fullname: string = '';
  address: string = '';
  cardNumber: number | null = null;
  quantity: number = 0;
  constructor(private cartService: CartService, private router:Router) {}
  ngOnInit(): void {
    this.cartService.getItems().subscribe((cItems) => {
      this.cartItems = cItems;
    });
    this.updateOrderPrice();
  }

  submitForm(): void {
    this.cartService.addOrder(this.fullname, this.address, this.itemsPrice, this.cardNumber as number);
    this.cartService.clearCart();
    this.router.navigateByUrl('/confirmed');
  }

  removeItem(cItem: CartItem) {
    this.cartService.removeItem(cItem.product.id);
    this.cartItems = this.cartItems.filter((item) => item.product.id !== cItem.product.id);
    this.updateOrderPrice();
  }

  inputChangeHandler(cItem: CartItem, event: any) {
    const orderQuantity = event.target.value;
    this.cartService.updateQuantity(cItem.product.id, orderQuantity);
    this.updateOrderPrice();
  }

  updateOrderPrice(): void {
    this.itemsPrice = parseFloat(this.cartService.getOrderPrice().toFixed(2));
  }
}
