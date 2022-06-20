import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompanyModel } from 'src/app/models/company.model';
import { HeroModel } from 'src/app/models/hero.model';
import { CompanyService } from 'src/app/services/company.service';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  heroModel?: HeroModel;  
  companyList: CompanyModel[] = [];

  fileBase64 : string | undefined = "";
  
  backgroundimage: string | undefined = "";

  form: FormGroup = new FormGroup({
    heroname: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required),
    weapon: new FormControl('', Validators.required),
    herocompany: new FormControl(''),
    photo: new FormControl(),
    backgroundimage: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroesService,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id == null)
      return;

    this.companyService.getCompanies()?.subscribe(value => {
      this.companyList = <CompanyModel[]> value;
    });
    
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
      companyid: this.form.get('herocompany')?.value,
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
