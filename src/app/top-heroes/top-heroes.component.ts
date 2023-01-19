import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroServiceService } from '../services/hero-service.service';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css'],
  providers: []
})
export class TopHeroesComponent implements OnInit {
  
  constructor(private heroesService : HeroServiceService) {}

  topHeroes : Hero[] = [];

  ngOnInit() {
    this.topHeroes = this.heroesService.getTopHeroes()
  }

}
