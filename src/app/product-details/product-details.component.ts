import { Component, OnInit } from '@angular/core';
import {ServiceEcommService} from '../service-ecomm.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HomePageService} from '../home-page.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
infor;
Prod;
mypro;
  constructor(private Serv: ServiceEcommService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.mypro = id;
    });
    this.Serv.getBackend(this.mypro).subscribe((data) =>{
      this.Prod = data;
    });


  }



}
