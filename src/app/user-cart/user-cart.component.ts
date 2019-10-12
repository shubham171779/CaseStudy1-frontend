import { Component, OnInit } from '@angular/core';
import {UsercartService} from '../usercart.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
cartvar;
  constructor(private obj: UsercartService) { }

  ngOnInit() {
    this.obj.showcart().subscribe(data => {

      this.cartvar = data;
      console.log(data);
    });
  }
increment(abc)
{
  this.obj.increment(1, abc).subscribe(data =>{
    this.obj.showcart().subscribe(data1 =>{
      this.cartvar = data1;
    });
  });
}
  decrement(abc)
  {
    console.log(abc);
    this.obj.decrement(1, abc).subscribe(data =>{
      this.obj.showcart().subscribe(data1 => {
        this.cartvar = data1;
      });
    });
  }
deletion(abc2)
{
  this.obj.deletion(abc2).subscribe(data => {
    this.cartvar = data;
    this.obj.showcart().subscribe(data1 => {
      this.cartvar = data1;

    });
  });
}

}
