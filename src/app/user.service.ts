import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {



  private users:User[] = [
    {
      firstName:'jean',
      lastName:'smith',
      email:'jean@yoy.ty',
      drinkPreference:'coca',
      hobbies: ['coder','durum']
      }
  ];
 
  //création du Subject
  userSubject= new Subject<User[]>();
  

  emitUser(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user:User){
    this.users.push(user);
    this.emitUser();

  }


  constructor() { }

}