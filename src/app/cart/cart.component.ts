import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Cart } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()
  cart: Cart;

  constructor(private emitter: SharedService) {
    this.emitter.getEmitter().subscribe(cart => {
      this.cart = cart;
    });
  }

  ngOnInit() {}

}
