import { Component, Input} from '@angular/core';
import { AuthService } from './services/auth.service';
import { Cart, Product } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  @Input()
  cart: Cart;

  constructor(public auth: AuthService) {

  this.auth.getToken();

    this.products = [
      new Product(
        88,
        'Powerball Display',
        '/assets/products/powerball-display.jpg',
        29.99),
      new Product(
        102,
        'Ice Cube of Sweden',
        '/assets/products/ice-cube-of-sweden.jpg',
        8.6),
      new Product(
        89,
        'Cool-Well Kylbrunn',
        '/assets/products/cool-well-kylbrunn.jpg',
        5.99),
      new Product(
        90,
        'Portabel Hängmatta',
        '/assets/products/portabel-hangmatta.jpg',
        50.99)
    ];
  }

}
