import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero.model';
import { HeroServiceService } from '../services/hero-service.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: []
})
export class HeroDetailComponent implements OnInit{
  heroName = "HERONAME"
  heroId = -1
  constructor(private heroService : HeroServiceService, private route : ActivatedRoute, private _location : Location) {}

  ngOnInit(): void {

    console.log("Triggered ngOnInit")

    this.heroId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

    console.log("got id: " + this.heroId)

    const name = this.heroService.getHero(this.heroId)
    if (name !== undefined)
      this.heroName = name.name 

  }

  onClick() {
    this.heroService.modifyHero(this.heroId, this.heroName)
  }

  onBack() {
    this._location.back()
  }

}
