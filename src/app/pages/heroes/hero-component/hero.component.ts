import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  @Input() title? : string = "";
  @Input() subtitle? : string = "";
  @Input() profilepic? : any = '';
  @Input() pic? : any = "";
  @Input() description? : string = "";

  ngOnInit(): void {
  }

}
