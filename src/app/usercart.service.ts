import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsercartService {

  constructor(private client: HttpClient) { }
  showcart() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    const url = 'http://localhost:2000/carts/allcart';
    return this.client.get(url, {headers});
  }
  decrement(value, productId)
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    return this.client.get('http://localhost:2000/carts/cart/decrement/1/product/' + productId, {headers});
  }
  increment(value, productId)
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    return this.client.get('http://localhost:2000/carts/cart/increment/1/product/' + productId, {headers});
  }
  deletion(productId)
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    return this.client.get('http://localhost:2000/carts/cart/deleteItem/productId/' + productId , {headers});
  }
  addtoCart(abc)
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    console.log(abc);
    return this.client.get('http://localhost:2000/carts/cart/addItem/productId/' + abc, {headers});
  }
  checkout()
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    return this.client.get('http://localhost:2000/carts/checkout', {headers});
  }
}
