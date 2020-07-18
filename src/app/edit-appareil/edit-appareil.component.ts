import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppareilService} from '../appareil.service';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.css']
})
export class EditAppareilComponent implements OnInit {
  defaultOnOff:string="éteint";
  constructor(private appareilService:AppareilService,
  private routes:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    const name = form.value.name;
    const statut = form.value.statut;
    this.appareilService.addAppareil(name,statut);
    this.appareilService.emitAppareilSubject();
    this.routes.navigate(['appareils'])

      
  }

}