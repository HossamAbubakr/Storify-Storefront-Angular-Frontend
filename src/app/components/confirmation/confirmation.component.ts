import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/models/Order';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  order: Order = {
    customer: '',
    address: '',
    cardNumber: 0,
    total: 0
  }

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.order = this.cartService.getOrder();
    if (this.order.total === 0) this.router.navigateByUrl('/')
  }

}
