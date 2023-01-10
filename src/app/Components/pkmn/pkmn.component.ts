import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/Services/pokemon-service.service';
@Component({
  selector: 'app-pkmn',
  templateUrl: './pkmn.component.html',
  styleUrls: ['./pkmn.component.scss']
})
export class PkmnComponent implements OnInit {
  constructor( public pkmnRequest: PokemonServiceService ) { }

  ngOnInit(): void {
  }

}
