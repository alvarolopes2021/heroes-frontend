import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-company-component',
  templateUrl: './company-component.component.html',
  styleUrls: ['./company-component.component.css']
})
export class CompanyComponentComponent implements OnInit {

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
