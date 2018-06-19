import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { AppRoutingModule } from './Routing/routingmodule';
import {HttpClientModule} from '@angular/common/http';
 import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
 import { UserServiceService } from './services/user-service.service';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AddNewUserComponent } from './components/admin-panel/user/add-new-user/add-new-user.component';
import { UserComponent } from './components/admin-panel/user/user.component';

import { CustomerComponent } from './components/admin-panel/customer/customer.component';
import { StoreComponent } from './components/admin-panel/store/store.component';
import { AddStoreComponent } from './components/admin-panel/store/add-store/add-store.component';
import { ListStoreComponent } from './components/admin-panel/store/list-store/list-store.component';
import { ListUserComponent } from './components/admin-panel/user/list-user/list-user.component';
import { AdminDashboardComponent } from './components/admin-panel/admin-dashboard/admin-dashboard.component';
import { ResetPasswordService } from './services/reset-password.service';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticateService } from './services/authenticate.service';
import { AuthGuard } from './auth.guard';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {HomeComponent} from './components/start/home/home.component';
import {  HomeService} from './services/home.service';
import {  CreateCustomerService} from './services/create-customer.service';
import { ChomeComponent } from './components/customer/chome/chome.component';
import { CheaderComponent } from './components/customer/cheader/cheader.component';
import { OrderService } from './services/order.service';
import { CartComponent } from './components/customer/cart/cart.component';
import { NewUserformComponent } from './new-userform/new-userform.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    CustomerFormComponent,
    ForgetPasswordComponent,
     PageNotFoundComponent,
     AdminPanelComponent,
     AddNewUserComponent,
    
     UserComponent,
     CustomerComponent,
     StoreComponent,
     AddStoreComponent,
     ListStoreComponent,
     ListUserComponent,
     AdminDashboardComponent,
     ResetPasswordComponent,
     HeaderComponent,
     FooterComponent,
     HomeComponent,
     ChomeComponent,
     CheaderComponent,
     CartComponent,
     NewUserformComponent,
   

  ],
  imports: [
    [SweetAlert2Module.forRoot()],
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
    
  ],
  providers: [AuthenticateService , CookieService , AuthGuard ,UserServiceService, ResetPasswordService,
    HomeService,CreateCustomerService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
