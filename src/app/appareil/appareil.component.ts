import { Component, OnInit, Input } from '@angular/core';
import {AppareilService} from '../appareil.service';
@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName:string;
  @Input() appareilStatut:string;
  @Input() indexOfAppareil:number;
  @Input() id:number;
  constructor(private appareilService:AppareilService) { }

  ngOnInit() {
  }


  onSwitchOne(){
    this.appareilService.switchOnOne(this.indexOfAppareil);

  }

  offSwitchOne(){
    this.appareilService.switchOfOne(this.indexOfAppareil);
  }

}