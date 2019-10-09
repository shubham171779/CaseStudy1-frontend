import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceEcommService {

  constructor(private client: HttpClient) { }
  getinformation() {
    const url = '/assets/data/dataBrand.json';
    return this.client.get(url);
  }

  getBacken()
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    const u1 = 'http://localhost:2000/api/getallitems';
    return this.client.get(u1, {headers});
  }
  getBackend(url6)
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    const u1 = 'http://localhost:2000/api/id/' + url6;
    return this.client.get(u1, {headers});
  }

}
