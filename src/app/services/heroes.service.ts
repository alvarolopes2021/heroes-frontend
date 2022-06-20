import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/constants';
import { HeroModel } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }


  getHeroes(): Observable<HeroModel[]> | null{
    return this.http.get<HeroModel[]>(Constants.HttpEndpoints.ALL_HEROES);
  }

  heroDetail(id: string): Observable<HeroModel> | null{
    let param = new HttpParams().append(Constants.Keys.HERO, id);
    return this.http.get<HeroModel>(Constants.HttpEndpoints.HERO_DETAIL, {params: param});
  }

  addHero(hero: HeroModel){
    return this.http.post<HeroModel>(Constants.HttpEndpoints.ADD_HERO, hero);
  }

  updateHero(hero: HeroModel){
    if(hero == null)
      return;

    return this.http.put<HeroModel>(Constants.HttpEndpoints.UPDATE_HERO, hero);
  }

  deleteHero(hero: HeroModel){
    if(hero == null)
      return;

    return this.http.post<HeroModel>(Constants.HttpEndpoints.DELETE_HERO, hero);
  }

}
