import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  showDetail : boolean = false;

  constructor() { }

  form: FormGroup = new FormGroup({
    heroname: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required),
    weapon: new FormControl('', Validators.required),
    photo: new FormControl(),
    backgroundimage: new FormControl()
  });

  @Input() title? : string = "";
  @Input() subtitle? : string = "";
  @Input() profilepic? : any = '';
  @Input() pic? : any = "";
  @Input() description? : string = "";
  @Input() data: any;

  @Output() action = new EventEmitter<any>();

  ngOnInit(): void {
  }

  executeAction(){
    this.action.next(this.data);
  } 

  update(){
    
  }
}
