import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor() { }

  heros : Hero[] = [
    {name: "Batman", id: 0},
    {name: "Redhood", id: 1},
    {name: "Superman", id: 3},
    {name: "Guts", id: 5},
    {name: "Flash", id: 6},
    {name: "Robin", id: 7},
    {name: "Ichigo", id: 8},
  ]

  newHeroes = new EventEmitter<Hero[]>();

  getHeroes() : Hero[] {
    return this.heros
  }

  getHero(id: Number) : Hero | undefined {
    return this.heros.find(hero => id==hero.id)
  }

  modifyHero(id : Number, newName : string) {
    var hero = this.heros.find(hero => hero.id == id)
    if (hero != undefined) hero.name = newName
  }

  getTopHeroes() : Hero[] {
    const topHeroes : Hero[] = []
    for (var i = 0; i < 4; i++) {
      topHeroes.push(this.heros[i])
    }
    return topHeroes
  }

}
