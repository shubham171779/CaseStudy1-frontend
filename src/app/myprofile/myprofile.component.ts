import { Component, OnInit } from '@angular/core';
import {UsercartService} from '../usercart.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
dat;
  constructor(private cart: UsercartService) { }

  ngOnInit() {
    this.cart.usercart().subscribe(data => {
      this.dat = data;
      console.log(this.dat);
    });
  }

}
