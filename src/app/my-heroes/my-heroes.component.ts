import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroServiceService } from '../services/hero-service.service';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.css'],
  providers: []
})
export class MyHeroesComponent implements OnInit {

  constructor(private heroService : HeroServiceService) {}

  Heroes : Hero[] = []

  ngOnInit(): void {
      this.Heroes = this.heroService.getHeroes()
  }

}
