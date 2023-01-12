import { Component, Input, OnInit } from '@angular/core';
import { PokemonInterface } from 'src/app/Interfaces/pokemon-interface';
import { PokemonServiceService } from 'src/app/Services/Pokemon/pokemon-service.service';

@Component({
  selector: 'app-pokemon-view-component',
  templateUrl: './pokemon-view-component.component.html',
  styleUrls: ['./pokemon-view-component.component.scss']
})
export class PokemonViewComponentComponent implements OnInit {
  @Input() pkmn!: PokemonInterface;
  currentSrcImg: string = ''
  constructor(public pkmnService: PokemonServiceService) { }
  ngOnInit(): void {
    this.currentSrcImg = this.pkmn.sprites.front_default;
  }

  /**
   *
   * When the mouse is over the pokémon, this shows its back.
   *
   */
  onMouseOver(): void{
    this.currentSrcImg = this.pkmn.sprites.back_default;
  }
  /**
   *
   * When the mouse is no longer over the pokemon, the pokemon returns to its original state.
   *
   */
  onMouseOut(): void{
    this.currentSrcImg = this.pkmn.sprites.front_default;
  }

}
