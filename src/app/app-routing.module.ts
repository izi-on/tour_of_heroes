import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MyHeroesComponent } from './my-heroes/my-heroes.component';
import { TopHeroesComponent } from './top-heroes/top-heroes.component';

const routes: Routes = [
  {path: '', component: TopHeroesComponent},
  {path: 'myheroes', component: MyHeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
