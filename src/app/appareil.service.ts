import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppareilService {

  appareilSubject  = new Subject<any[]>();

    private appareils =  [
    {
      id : 1,
      name : "frigo",
      statut: "éteint"
    },
    {
      id : 2,
      name : "tv",
      statut: "allumé"
    },
    {
      id : 3,
      name :"lave vaisselle",
      statut:"allumé"
    }
  ]

  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());

  }


  getAppareilById(id: number){
    const appareil = this.appareils.find( 
      (appareilObject) => {
        return appareilObject.id === id
    }
    
    );
    return appareil;
  }
  switchOnAll(){
    for(let elements of this.appareils){
      elements.statut = "allumé";
    }
    this.emitAppareilSubject();
  }


  switchOffAll(){
    for (let elements of this.appareils){
      elements.statut = "éteint";
    }
      this.emitAppareilSubject();
  }


  switchOnOne(index:number){
    this.appareils[index].statut = "allumé";
      this.emitAppareilSubject();

  }
  
  switchOfOne(index:number){
    this.appareils[index].statut = "éteint";
      this.emitAppareilSubject();
  }

  addAppareil(name:string,statut:string){
    const appareilObject = { id : 0, name :'', statut  :''}
    appareilObject.name = name;
    appareilObject.statut = statut;
    appareilObject.id = this.appareils.length + 1;
    console.log(appareilObject);
    this.appareils.push(appareilObject);
  }

  constructor() { }

}