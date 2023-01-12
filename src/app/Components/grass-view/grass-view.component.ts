import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonInterface } from 'src/app/Interfaces/pokemon-interface';
import { PokemonServiceService } from 'src/app/Services/pokemon-service.service';

@Component({
  selector: 'app-grass-view',
  templateUrl: './grass-view.component.html',
  styleUrls: ['./grass-view.component.scss']
})
export class GrassViewComponent implements OnInit {
  pkmnObservable$!: Observable< PokemonInterface >
  constructor( public pkmnService: PokemonServiceService ) { }

  ngOnInit(): void {
    this.genRandomPkmn()
  }
  genRandomPkmn(){
    this.pkmnObservable$ = this.pkmnService.getPkmnObservable()
  }

}
