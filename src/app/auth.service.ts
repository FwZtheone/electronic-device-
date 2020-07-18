import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isAuth= false;
  constructor() { }

  signIn(){

    return new Promise( (resolve,reject)=> {
      setTimeout( () => { 
        this.isAuth = true;
        resolve(true);
      }, 2000)
    })

  }

  signOut(){
    this.isAuth = false;
  }

}