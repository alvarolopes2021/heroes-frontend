import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompanyModel } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  companyModel?: CompanyModel;  

  fileBase64 : string | undefined = "";
  
  backgroundimage: string | undefined = "";

  form: FormGroup = new FormGroup({
    companyname: new FormControl('', Validators.required),
    creationyear: new FormControl('', Validators.required),
    owner: new FormControl('', Validators.required),
    photo: new FormControl(),
    backgroundimage: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id == null)
      return;

    this.companyService.companyDetail(id)?.subscribe(value => {
      this.companyModel = <CompanyModel>value;

      this.form.get('companyname')?.setValue(value.companyname);
      this.form.get('creationyear')?.setValue(value.creationyear);
      this.form.get('owner')?.setValue(value.owner);
      this.backgroundimage = value.backgroundimage,
      this.fileBase64 = value.profilepic
    });
    
  }

  updateCompany(){
    let company: CompanyModel = {
      companyid: this.companyModel?.companyid,
      companyname: this.form.get('companyname')?.value,
      creationyear: this.form.get('creationyear')?.value,
      owner: this.form.get('owner')?.value,
      profilepic: this.fileBase64,
      backgroundimage: this.backgroundimage
    }
    this.companyService.updateCompany(company)?.subscribe(value => {
      this.companyModel = <CompanyModel>value;

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
