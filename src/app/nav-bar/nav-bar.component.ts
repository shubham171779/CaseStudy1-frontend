import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ServiceEcommService} from '../service-ecomm.service';
import {HomePageComponent} from '../home-page/home-page.component';

import {HomePageService} from '../home-page.service';
import {AppService} from '../app.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private homeer: HomePageService, private service: AppService,private log: AuthenticationService) { }
mypro;
  ngOnInit()
  {


  }
  logout() {
    this.service.isLoggedIn(false);

  }
}
