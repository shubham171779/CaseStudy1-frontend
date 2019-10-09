import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
infor;
  constructor(private client: HttpClient ) { }
  getByCat(category) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    const url = 'http://localhost:2000/api/category/' + category;
    return this.client.get(url,{headers});
  }

}
