import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  heroModel?: HeroModel;  

  fileBase64 : string | undefined = "";
  
  backgroundimage: string | undefined = "";

  form: FormGroup = new FormGroup({
    heroname: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required),
    weapon: new FormControl('', Validators.required),
    photo: new FormControl(),
    backgroundimage: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroesService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id == null)
      return;

    this.heroService.heroDetail(id)?.subscribe(value => {
      this.heroModel = <HeroModel>value;

      this.form.get('heroname')?.setValue(value.name);
      this.form.get('group')?.setValue(value.group);
      this.form.get('weapon')?.setValue(value.weapon);
      this.backgroundimage = value.backgroundimage,
      this.fileBase64 = value.profilepic
    });
    
  }

  updateHero(){
    let hero: HeroModel = {
      heroid: this.heroModel?.heroid,
      name: this.form.get('heroname')?.value,
      group: this.form.get('group')?.value,
      weapon: this.form.get('weapon')?.value,
      profilepic: this.fileBase64,
      backgroundimage: this.backgroundimage
    }
    this.heroService.updateHero(hero)?.subscribe(value => {
      this.heroModel = <HeroModel>value;

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
