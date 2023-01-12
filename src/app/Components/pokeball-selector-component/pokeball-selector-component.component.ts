import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { PokemonInterface } from 'src/app/Interfaces/pokemon-interface';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { PokemonServiceService } from 'src/app/Services/pokemon-service.service';
@Component({
  selector: 'app-pokeball-selector-component',
  templateUrl: './pokeball-selector-component.component.html',
  styleUrls: ['./pokeball-selector-component.component.scss']
})
export class PokeballSelectorComponentComponent implements OnInit {
  items!: MenuItem[];
  @Input() pkmn!:PokemonInterface;
  @Output("genRandomPkmn") genRandomPkmn: EventEmitter<void> = new EventEmitter();
  constructor( public pkmnService: PokemonServiceService, public auth: AuthServiceService) { }
  ngOnInit(): void {
    this.items = [
      {label: 'Let Escape', command : () =>  this.genRandomPkmn.emit()},
      {label: 'Poké Ball', icon: 'pokeball',command : () => this.capture(this.throwPokeball(0.25)) },
      {label: 'Ultra Ball', icon: 'ultraball',command : () => this.capture(this.throwPokeball(0.70)) },
      {label: 'Master Ball', icon: 'masterball',command : () => this.capture(this.throwPokeball(1) )},
    ];
  }

  throwPokeball(probability: number): Boolean{
    const rand = Math.random();
    if (rand <= probability){
      return true
    }
    else{
      return false
    }
    }
  capture(a: Boolean){
    if (a) {
      console.log('si')
    }
    else{
      console.log('no')

    }
    this.genRandomPkmn.emit()
  }
}

