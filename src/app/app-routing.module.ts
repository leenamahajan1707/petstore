import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [

  { path: '', component: IndexComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'addItem', component: AddItemComponent },
  { path: 'order', component: OrderComponent },
 
  { path: 'home', component: HomeComponent },
  { path: 'forgetpw', component: ForgetPasswordComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
