import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { UserRegistrationComponent } from './user-registration-component/user-registration/user-registration.component';
import { HomePageComponent } from './home-component/home-page/home-page.component';
import { UserLoginComponentComponent } from './user-login-component/user-login-component.component';
const routes: Routes = [

  { path: '', redirectTo:"home", pathMatch:'full'},
  {path: 'home', component:HomePageComponent},
  {path: 'login', component:UserLoginComponentComponent},
  {path: 'registration', component:UserRegistrationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
