import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../appareil.service';

import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  lastUpdate = new Promise((resolve,reject)=> {
    const date = new Date();
    setTimeout( () => {
      resolve(date)
    },2000)
  })



  appareils:any[];
  appareilSubscription:Subscription;


  onAllumer(){
    this.appareilService.switchOnAll();
  }


  onOff(){
      this.appareilService.switchOffAll();
  }

  ngOnInit(){
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
        (appareils:any[])=>  {
          this.appareils = appareils;
        }
    );
    this.appareilService.emitAppareilSubject();
  }

  constructor(private appareilService:AppareilService){
    setTimeout( () => { 
      this.isAuth = true;

    }, 4000 )



  }


}