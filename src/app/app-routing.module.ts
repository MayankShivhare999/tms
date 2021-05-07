import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusbookingviewComponent } from './busbookingview/busbookingview.component';
import { BusdetailComponent } from './busdetail/busdetail.component';
import { BusviewComponent } from './busview/busview.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { HomeComponent } from './home/home.component';
import { HotelviewComponent } from './hotelview/hotelview.component';
import { LoginComponent } from './login/login.component';
import { PackageviewComponent } from './packageview/packageview.component';
import { RoutedetailComponent } from './routedetail/routedetail.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bus', component: BusviewComponent},
  {path: 'hotel', component: HotelviewComponent},
  {path: 'package', component: PackageviewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'routedetail', component: RoutedetailComponent},
  {path: 'busdetail', component: BusdetailComponent},
  {path: 'myprofile', component: CustomerprofileComponent},
  {path: 'busbookingview', component: BusbookingviewComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
