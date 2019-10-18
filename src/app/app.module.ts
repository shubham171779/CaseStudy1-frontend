import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BottomlineComponent } from './bottomline/bottomline.component';
import {ServiceEcommService} from './service-ecomm.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OrderHistoryComponent } from './order-history/order-history.component';

import { MyprofileComponent } from './myprofile/myprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ProductDetailsComponent,
    UserCartComponent,
    LoginComponent,
    SignupComponent,
    BottomlineComponent,
    OrderHistoryComponent,
    MyprofileComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ServiceEcommService],
  bootstrap: [AppComponent]
})
export class AppModule { }
