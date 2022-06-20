import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/constants';
import { CompanyModel } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }


  getCompanies(): Observable<CompanyModel[]> | null{
    return this.http.get<CompanyModel[]>(Constants.HttpEndpoints.ALL_COMPANIES);
  }

  companyDetail(id: string): Observable<CompanyModel> | null{
    let param = new HttpParams().append(Constants.Keys.COMPANY, id);
    return this.http.get<CompanyModel>(Constants.HttpEndpoints.COMPANY_DETAIL, {params: param});
  }

  addCompany(company: CompanyModel){
    return this.http.post<CompanyModel>(Constants.HttpEndpoints.ADD_COMPANY, company);
  }

  updateCompany(company: CompanyModel){
    if(company == null)
      return;

    return this.http.put<CompanyModel>(Constants.HttpEndpoints.UPDATE_COMPANY, company);
  }

  deleteCompany(company: CompanyModel){
    if(company == null)
      return;

    return this.http.post<CompanyModel>(Constants.HttpEndpoints.DELETE_COMPANY, company);
  }

}
