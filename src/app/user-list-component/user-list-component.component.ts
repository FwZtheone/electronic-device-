import { Component, OnInit, OnDestroy } from '@angular/core';
import {User} from '../models/user.model';
import {Subscription} from 'rxjs/Subscription';
import {UserService} from '../user.service';
@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit,OnDestroy {

  users:User[];
  userSubscription:Subscription;


  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userSubscription= this.userService.userSubject.subscribe(
        (user:User[]) => {
          this.users  = user;
        }

    );

    this.userService.emitUser();
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }


}