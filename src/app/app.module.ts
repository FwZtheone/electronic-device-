import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './appareil.service';
import { AppareilViewComponent } from  './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import {Routes, RouterModule} from '@angular/router';
import { AuthService } from './auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOfFourComponent } from './four-of-four/four-of-four.component';
import { AuthGardeService } from './auth-garde.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserService } from './user.service';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';

import {ReactiveFormsModule} from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';


const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGardeService] , component: AppareilViewComponent},
  {path:'users', component: UserListComponentComponent},
  { path : 'auth', component: AuthComponent},
  {path :'new-user', component : NewUserComponent},
  { path :'', component: AppareilViewComponent},
  { path :'appareils/:id', canActivate: [AuthGardeService], component: SingleAppareilComponent},
  { path : 'not-found', component : FourOfFourComponent},
  {path : 'edit' , canActivate:[AuthGardeService], component: EditAppareilComponent},
  { path :'**', redirectTo:'not-found'}
  
  ]

  
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule ],
  declarations: [ AppComponent, AppareilComponent, AppareilViewComponent, AuthComponent, SingleAppareilComponent, FourOfFourComponent, EditAppareilComponent, UserListComponentComponent, NewUserComponent],
  bootstrap:    [ AppComponent ],
  providers: [AppareilService, AuthService, AuthGardeService, UserService]
})
export class AppModule {
  
  
 }
