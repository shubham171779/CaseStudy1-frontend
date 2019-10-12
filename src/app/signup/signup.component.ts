import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  username;
  authentication;
  email;
  password;
  confirm;
  constructor(private client: HttpClient, private route: Router) { }

  ngOnInit() {

  }
  signup() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    console.log('signup');
    const my = {
      email: this.email,

      password: this.password,
      authentication: 'customer'
   };
    this.client.post('http://localhost:2000/user/CreateRow', my).subscribe(data =>{
      this.route.navigate(['login']);
      console.log(data);
    });

  }
}
