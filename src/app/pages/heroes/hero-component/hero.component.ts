import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
