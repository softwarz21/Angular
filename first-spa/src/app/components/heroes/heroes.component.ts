import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService, Heroe } from '../../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroService:HeroService,
               private _router:Router ) { }

  ngOnInit(): void {
    this.heroes = this._heroService.getHeroes();
  }

  verHeroe(idx:number) {
    this._router.navigate(['/heroe', idx]);
  }
}
