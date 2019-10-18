import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Itemdata} from '../Itemdata';
import {UsercartService} from '../usercart.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  itemname;
  price;
  details;
  image;
  category;
  subcategory;
  pdata:Itemdata;
  rdata;
  constructor(private http: HttpClient,private user : UsercartService) { }

  ngOnInit() {
  }
  additem()
  {
    this.pdata = new Itemdata();
    this.pdata.name=this.itemname;
    this.pdata.price = this.price;
    this.pdata.category=this.category;
    this.pdata.image=this.image;
    this.pdata.subcategory=this.subcategory;
    this.user.additem(this.pdata).subscribe(data=>
    {
      this.rdata=data;
    })
  }

}
