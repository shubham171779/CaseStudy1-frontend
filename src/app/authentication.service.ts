import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
uer;
  constructor(private http: HttpClient) { }
  authenticate(username, password)
{

this.uer = username;
const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});

return this.http.get('http://localhost:2000/user/allusers', {headers}).pipe(
    map(data => {
      sessionStorage.setItem('token', btoa(username + ':' + password));
    }));

}
isUserLoggedIn()
{
  const user = sessionStorage.getItem('token');
  console.log(!(user === null));
  return !(user === null);

}
logoutService()
{
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('auth');
}
}
