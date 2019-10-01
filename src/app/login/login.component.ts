import { Component, OnInit } from '@angular/core';
import {ServiceEcommService} from '../service-ecomm.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
gooo;
  constructor(private Service: ServiceEcommService) { }

  ngOnInit() {
    return this.Service.getBackend().subscribe((data) => {this.gooo = data;
    });
  }


}
