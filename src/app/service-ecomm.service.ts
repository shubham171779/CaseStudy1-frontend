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
}
