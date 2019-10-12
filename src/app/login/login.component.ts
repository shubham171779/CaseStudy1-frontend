import { Component, OnInit } from '@angular/core';
import {ServiceEcommService} from '../service-ecomm.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(private service: AppService, private router: Router, private authService: AuthenticationService ) { }

  ngOnInit() {
    if (this.service.checklogin())
    {
      this.router.navigate(['home']);
    }
  }
  login() {
    console.log('login function');
    this.authService.authenticate(this.username, this.password).subscribe(data =>{
      this.service.isLoggedIn(true);

      this.router.navigate(['home']);
    });
  }



}
