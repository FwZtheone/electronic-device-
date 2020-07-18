import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  secondes: number;

constructor(){}

ngOnInit(){
  const counter  = Observable.interval(1000);
  counter.subscribe( (value)=> {
        this.secondes = value
  }, (err)=> {
      console.log('il y a une erreur');
  }, () => {
    console.log("observation finie ! ")
  })

}






}
