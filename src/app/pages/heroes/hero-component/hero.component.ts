import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  @Input() title? : string = "";
  @Input() subtitle? : string = "";
  @Input() undersub? : string = "";
  @Input() profilepic? : any = '';
  @Input() pic? : any = "";
  @Input() description? : string = "";
  @Input() data: any;

  @Output() action = new EventEmitter<any>();
  @Output() action2 = new EventEmitter<any>();

  ngOnInit(): void {
  }

  executeAction(){
    this.action.next(this.data);
  } 

}
