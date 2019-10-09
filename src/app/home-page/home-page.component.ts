import { Component, OnInit } from '@angular/core';
import {ServiceEcommService} from '../service-ecomm.service';
import {HomePageService} from '../home-page.service';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
infor;
  constructor(private Service: ServiceEcommService, private home: HomePageService,private service: AppService, private router: Router) { }
  ngOnInit(){
    return this.Service.getBacken().subscribe((data) => {this.infor = data; });
  }
  getClothes()
  {


    this.home.getByCat('Clothing').subscribe(data1 => {this.infor = data1; });
  }
  getBooks()
  {
   this.home.getByCat('Books').subscribe(data2 => {this.infor = data2; });
  }
  getSports()
  {
     this.home.getByCat('Sports').subscribe(data3 => {this.infor = data3;});
  }
  getElectronics() {
    this.home.getByCat('Electronics').subscribe(data4 => {this.infor = data4;});
  }
logout()
{
  this.service.isLoggedIn(false);
  this.router.navigate(['login']);
}
mycart()
{
  if(this.service.checklogin())
  {
    this.router.navigate(['cart']);
  }
}




}
