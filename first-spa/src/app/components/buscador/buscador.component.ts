import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private _activatedRoute: ActivatedRoute,
              private _router:Router,
              private _heroService: HeroService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      // console.log(params['term']);
      this.termino = params['term'];
      this.heroes = this._heroService.buscarHeroes(params['term']);
      console.log(this.heroes);
    });
  }

  verHeroe(idx:number) {
    this._router.navigate(['/heroe', idx]);
  }

}
