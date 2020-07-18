import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
@Injectable()
export class AuthGardeService implements CanActivate {

  canActivate(
     route:ActivatedRouteSnapshot,
     state:RouterStateSnapshot
     ):Observable<boolean> | Promise<boolean> | boolean {

       if(this.authService.isAuth){
         return true;
       }
       else {
         this.router.navigate(['/auth']);

       }

     }

  constructor(private authService:AuthService, private router:Router) { }

}