import { Component, OnInit } from '@angular/core';
import { UserInfo } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { PokemonInterface } from 'src/app/Interfaces/pokemon-interface';
import { AuthServiceService } from 'src/app/Services/Auth/auth-service.service';
import { PokemonServiceService } from 'src/app/Services/Pokemon/pokemon-service.service';

@Component({
  selector: 'app-grass-view',
  templateUrl: './grass-view.component.html',
  styleUrls: ['./grass-view.component.scss']
})
export class GrassViewComponent implements OnInit {
  pkmnObservable$!: Observable< PokemonInterface >
  authObservable$!: Observable < UserInfo | null >
  constructor( public pkmnService: PokemonServiceService, public authService:AuthServiceService ) { }

  ngOnInit(): void {
    this.genRandomPkmn()
    this.authObservable$ = this.authService.getObservableCurrentUser;
  }

  /**
   *
   * Generate a random pokemon.
   *
   */
  genRandomPkmn(){
    this.pkmnObservable$ = this.pkmnService.getPkmnObservable()
  }

}
