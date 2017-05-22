import { Component, Input, OnInit } from '@angular/core';
import { Product, Cart } from '../models';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input()
  product: Product;

  cart: Cart;

  constructor(public auth: AuthService, private emitter: SharedService) {}

  ngOnInit() {}

  addToCart(id) {
    this.auth.addToCart(id).then(cart => {
      this.cart = new Cart(cart['cart_id'], cart['total_values']['cartarticles_total'], cart['currency_code'], cart['cartarticles']);
      this.emitter.emit(this.cart);
    });
  }

}
