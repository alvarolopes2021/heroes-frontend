import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCompaniesComponent } from './pages/company/all-companies/all-companies.component';
import { HeroDetailComponent } from './pages/heroes/hero-detail/hero-detail.component';
import { HeroesComponent } from './pages/heroes/heroes/heroes.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'heroes', component: HeroesComponent },
  {path: 'companies', component: AllCompaniesComponent },
  {path: 'heroes/hero-detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
