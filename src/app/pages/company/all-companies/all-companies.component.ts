import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyModel } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-all-companies',
  templateUrl: './all-companies.component.html',
  styleUrls: ['./all-companies.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AllCompaniesComponent implements OnInit {

  companyList: CompanyModel[] = [];

  willAdd: boolean = false;

  fileBase64: string = "";

  backgroundimage: string = "";

  constructor(
    private companyService: CompanyService
  ) { }


  ngOnInit(): void {
    this.companyService.getCompanies()?.subscribe((value) => {
      this.companyList = <CompanyModel[]>value;
    })
  }

  form: FormGroup = new FormGroup({
    companyname: new FormControl('', Validators.required),
    creationyear: new FormControl('', Validators.required),
    owner: new FormControl('', Validators.required),
    photo: new FormControl(),
    backgroundimage: new FormControl()
  });

  add() {
    if (this.form.invalid)
      return alert('Fill all the inputs!')

    let company: CompanyModel = {
      companyname: this.form.get('companyname')?.value,
      creationyear: this.form.get('creationyear')?.value,
      owner: this.form.get('owner')?.value,
      profilepic: this.fileBase64,
      backgroundimage: this.backgroundimage
    }

    this.companyService.addCompany(company).subscribe((value) => {
      this.companyList.push(value);
    });

  }

  deleteCompany(company: CompanyModel) {
    let op = confirm("Do you want to delete this company?");
    if (!op)
      return;

    this.companyService.deleteCompany(company)?.subscribe(value => {

      let index = this.companyList.indexOf(company);

      if (index !== -1)
        this.companyList.splice(index, 1);

    });
  }

  updateCompany(company: CompanyModel) {
    this.companyService.updateCompany(company)?.subscribe(value => {

      let index = this.companyList.indexOf(company);

      if (index !== -1)
        this.companyList[index] = value;

    });
  }

  processFile(imageInput: HTMLInputElement, type: string = "PROFILE") {
    const file: File = imageInput.files![0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      if (type === "PROFILE") {
        this.fileBase64 = event.target.result.toString();
        return;
      }

      this.backgroundimage = event.target.result.toString();

    });

    reader.readAsDataURL(file);

  }


}
