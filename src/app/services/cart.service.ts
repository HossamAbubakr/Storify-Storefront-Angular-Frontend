import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from '../models/CartItem';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];
  constructor() {}
  order: Order = {
    customer: '',
    address: '',
    total: 0,
    cardNumber: 0,
  };
  getItems(): Observable<CartItem[]> {
    return of(this.cartItems);
  }

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
  addItem(item: CartItem): void {
    if (this.cartItems.some((cItem) => cItem.product.id === item.product.id)) {
      this.cartItems = this.cartItems.map((cItem) =>
        cItem.product.id === item.product.id
          ? { ...cItem, quantity: +cItem.quantity + +item.quantity }
          : cItem
      );
    } else {
      this.cartItems.push(item);
    }
  }

  updateQuantity(itemID: number, quantity: number): void {
    this.cartItems = this.cartItems.map((cItem) => cItem.product.id === itemID? { ...cItem, quantity: quantity }: cItem);
  }

  removeItem(id: number): void {
    this.cartItems = this.cartItems.filter((cItem) => cItem.product.id !== id);
  }

  addOrder( customer: string, address: string,total: number,cardNumber: number): void {
    this.order = {
      customer,
      address,
      total,
      cardNumber,
    };
  }

  getOrder(): Order {
    return this.order;
  }

  getOrderPrice() : number {
    return this.cartItems.reduce((a, b) => {
      return a + b.quantity * b.product.price;
    }, 0);
  }

  clearCart(): void {
    this.cartItems = [];
  }

}
