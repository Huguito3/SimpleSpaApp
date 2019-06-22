import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
heroes: any[] = [];
termino: string;
  constructor( private heroeService: HeroesService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['term'];
      this.heroes = this.heroeService.buscarHeroes(params['term']);
      console.log(this.heroes);
    });
  }

}
