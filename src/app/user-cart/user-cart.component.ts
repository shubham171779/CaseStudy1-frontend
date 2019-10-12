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
  constructor(private obj: UsercartService, private router: Router) { }

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
checkout()
{
  this.obj.checkout().subscribe(data => {
    this.checkoutd = data;


  });
  this.router.navigate(['usercart']);
  location.reload();
  alert('nothing in cart continue shopping');
}

}
