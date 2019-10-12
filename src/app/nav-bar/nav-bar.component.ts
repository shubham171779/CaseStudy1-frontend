import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ServiceEcommService} from '../service-ecomm.service';
import {HomePageComponent} from '../home-page/home-page.component';

import {HomePageService} from '../home-page.service';
import {AppService} from '../app.service';
import {AuthenticationService} from '../authentication.service';
import {icuFromI18nMessage} from '@angular/compiler/src/render3/view/i18n/util';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private homeer: HomePageService, private service: AppService, private log: AuthenticationService, private client: HttpClient) { }
mypro;
  logouturl;
  ngOnInit()
  {


  }
  logout() {
    if(this.log.isUserLoggedIn())
    {
      this.log.logoutService();
      this.client.get(this.logouturl).subscribe(res => {
        alert('Logout Ssuccerssful');
      });
      this.router.navigate(['login']);
    }

  }
}
