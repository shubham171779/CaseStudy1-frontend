import { Component, OnInit } from '@angular/core';
import {ServiceEcommService} from '../service-ecomm.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
infor;
  constructor(private Serv: ServiceEcommService) { }

  ngOnInit() {
    this.Serv.getinformation().subscribe((data) => {this.infor = data; });
  }
  getInfo() {


  }


}
