import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonInterface } from 'src/app/Interfaces/pokemon-interface';
import { PokemonServiceService } from 'src/app/Services/pokemon-service.service';

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


  onMouseOver(){
    this.currentSrcImg = this.pkmn.sprites.back_default;
  }
  onMouseOut(){
    this.currentSrcImg = this.pkmn.sprites.front_default;
  }

}
