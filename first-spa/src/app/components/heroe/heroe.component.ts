import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroService: HeroService,
              private _router:Router) {
    this._activatedRoute.params.subscribe(params => {
      this.heroe = this._heroService.getHeroe(params['id']);
    });
  }

  ngOnInit(): void {
  }
  
  regresar() {
    this._router.navigate(['/heroes']);
  }
}
