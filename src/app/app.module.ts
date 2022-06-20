import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule  } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './navs/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/heroes/hero-component/hero.component';
import { HeroesComponent } from './pages/heroes/heroes/heroes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './pages/heroes/hero-detail/hero-detail.component';
import { CompanyDetailComponent } from './pages/company/company-detail/company-detail.component';
import { AllCompaniesComponent } from './pages/company/all-companies/all-companies.component';
import { CompanyComponentComponent } from './pages/company/company-component/company-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeroComponent,
    HeroesComponent,
    HeroDetailComponent,
    CompanyDetailComponent,
    AllCompaniesComponent,
    CompanyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
