import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {ProductDetailsComponent} from './product-details/product-details.component';


// tslint:disable-next-line:variable-name
export const Main_Routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'}, {
  path: 'home', component: HomePageComponent,
},
  {path: 'cart', component: UserCartComponent, },
  {path: 'signup', component: SignupComponent, },
  {path: 'login', component: LoginComponent, },
  {path: 'usercart', component: UserCartComponent, },



  {path: 'productDetails/:id', component: ProductDetailsComponent,}
];
