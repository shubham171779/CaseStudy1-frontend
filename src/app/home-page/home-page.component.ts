import { Component, OnInit } from '@angular/core';
import {ServiceEcommService} from '../service-ecomm.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private Service: ServiceEcommService) { }
infor;
  ngOnInit() {
    this.Service.getinformation().subscribe((data) => {this.infor = data; });
  }

}
