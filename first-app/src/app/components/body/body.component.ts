import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  frase: any;
  mostrar: boolean;
  personajes: string[];

  constructor() {
    this.frase = {
      mensaje: 'Un hombre que no se alimenta de sus sueños envejece pronto.',
      autor: 'William Shakespeare'
    },
    this.mostrar = true;
    this.personajes = [
      'Captain America',
      'Iron Man',
      'Thor'
    ]
  }

  ngOnInit(): void {
  }

}
