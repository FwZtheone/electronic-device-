import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../appareil.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  name : string   = 'appareil';
  statut : string = 'statut'

  constructor(private appareilService:AppareilService,
  private route:ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id).name;
    this.statut = this.appareilService.getAppareilById(+id).statut;
  }

}