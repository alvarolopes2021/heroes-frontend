import { HttpClient } from '@angular/common/http';
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

  addHero(hero: HeroModel){
    return this.http.post<HeroModel>(Constants.HttpEndpoints.ADD_HERO, hero);
  }

}
