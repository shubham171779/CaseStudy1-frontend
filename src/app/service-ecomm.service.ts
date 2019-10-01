import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceEcommService {

  constructor(private client: HttpClient) { }
  getinformation() {
    const url = '/assets/data/dataBrand.json';
    return this.client.get(url);
  }
  getBackend()
  {
    const u1 = 'http://localhost:2000/Pro/product';
    return this.client.get(u1);
  }
}
