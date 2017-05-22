import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  token: string;

  constructor(public http: Http) {}


  getToken() {
    const url = 'https://xcaxla5hr1.execute-api.eu-west-1.amazonaws.com/v1/';
    const body = {'country_code' : 'de'};

    this.http
      .post(url, body)
      .subscribe(
        data => { this.token = data.json().token; localStorage.setItem('token', this.token); },
        error => console.log(JSON.stringify(error.json()))
      );
  }


  addToCart(article_id) {
    const url = 'https://xcaxla5hr1.execute-api.eu-west-1.amazonaws.com/v1/carts/' + localStorage.getItem('token');
    const body = { 'articles': [ { 'article_id': article_id, 'article_quantity': 1 } ], 'language_code': 'de',
                   'currency_code': 'EUR', 'country_code': 'de' };

    return this.http.put(url, body)
      .toPromise().then(
        data => data.json()['cart'],
        error => console.log(JSON.stringify(error.json()))
      );

  }

}
