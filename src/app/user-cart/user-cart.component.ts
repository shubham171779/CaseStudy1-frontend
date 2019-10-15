import { Component, OnInit } from '@angular/core';
import {UsercartService} from '../usercart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
cartvar;
checkoutd;
sum =0;
count;
  constructor(private obj: UsercartService, private router: Router) { }

  ngOnInit() {
    this.obj.showcart().subscribe(data => {

      this.cartvar = data;
      console.log(data);
      // this.sum=0;
      // this.count=0;
      // for(const val of this.cartvar)
      // {
      //   this.sum += val.itm.price * val.quantity;
      //   this.count += 1;
      // }
this.totalchange();
    });

  }
increment(abc) {
  this.obj.increment(1, abc).subscribe(data =>{
    this.obj.showcart().subscribe(data1 =>{
      this.cartvar = data1;
      this.totalchange();
    });
  });
}
  decrement(abc) {
    console.log(abc);
    this.obj.decrement(1, abc).subscribe(data =>{
      this.obj.showcart().subscribe(data1 => {
        this.cartvar = data1;
        this.totalchange();
      });
    });
  }
deletion(abc2)
{
  this.obj.deletion(abc2).subscribe(data => {
    this.cartvar = data;
    this.obj.showcart().subscribe(data1 => {
      this.cartvar = data1;
      this.totalchange();
    });
  });
}
checkout()
{
  this.obj.checkout().subscribe(data => {
    this.checkoutd = data;


  });
  this.router.navigate(['OrderHistory']);
  location.reload();
  alert('nothing in cart continue shopping');
}
totalchange()
{
  this.sum = 0;
  this.count = 0;
  for (const val of this.cartvar)
  {
    this.sum += val.itm.price * val.quantity;
    this.count += 1;
  }
}


}
