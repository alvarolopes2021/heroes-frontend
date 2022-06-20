import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

  heroList: HeroModel[] = [];

  willAdd: boolean = false;

  fileBase64 : string = "";

  backgroundimage: string = "";

  constructor(
    private heroesService: HeroesService
  ) { }


  ngOnInit(): void {
    this.heroesService.getHeroes()?.subscribe((value) => {
      this.heroList = <HeroModel[]>value;
    })
  }


  form: FormGroup = new FormGroup({
    heroname: new FormControl('', Validators.required),
    superpower: new FormControl('', Validators.required),
    weapon: new FormControl('', Validators.required),
    photo: new FormControl(),
    backgroundimage: new FormControl()
  });

  add() {
    if (this.form.invalid)
      return alert('Fill all the inputs!')

    let hero: HeroModel = {
      name: this.form.get('heroname')?.value,
      superpower: this.form.get('superpower')?.value,
      weapon: this.form.get('weapon')?.value,
      profilepic: this.fileBase64,
      backgroundimage: this.backgroundimage
    };
  
    this.heroList.push(hero);

    this.heroesService.addHero(hero).subscribe((value) => {
      this.heroList.push(hero);
    });   

  }

  processFile(imageInput: HTMLInputElement, type: string = "PROFILE") {
    const file: File = imageInput.files![0];
    const reader = new FileReader();

    
    reader.addEventListener('load', (event: any) => {

      if(type === "PROFILE"){
        this.fileBase64 = event.target.result.toString();
        return;
      }
      
      this.backgroundimage = event.target.result.toString();

    });
    
    reader.readAsDataURL(file);

  }

}
