import { Component, OnInit } from '@angular/core';
import { UserInfo } from '@angular/fire/auth';
import { Observable, of, switchMap } from 'rxjs';
import { PokemonCapture } from 'src/app/Interfaces/pokemon-capture';
import { PokemonData } from 'src/app/Interfaces/pokemon-data';
import { PokemonInterface } from 'src/app/Interfaces/pokemon-interface';
import { AuthServiceService } from 'src/app/Services/Auth/auth-service.service';
import { PokemonCaptureServiceService } from 'src/app/Services/Pokemon/pokemon-capture-service.service';
@Component({
  selector: 'app-captures-view',
  templateUrl: './captures-view.component.html',
  styleUrls: ['./captures-view.component.scss']
})
export class CapturesViewComponent {
  currentSrcImg: string = '';
  observablePkmn$: Observable< PokemonData[] | null> = this.auth.getObservableCurrentUser.pipe(
    switchMap( (value : UserInfo | null) => {
      if (value === null){
        return of(null);
      }
      return this.pkmnService.getCaptures(value.uid);
    })
  );
  constructor(public auth: AuthServiceService, public pkmnService: PokemonCaptureServiceService) { }
  /**
   *
   * Delete a pokemon with a certain id.
   *
   * @params docId - id of the document associated to a capture.
   *
   */
  delete(docId: string){
    this.pkmnService.delCapture(docId);
  }
    /**
   *
   * When the mouse is over the pokémon, this shows its back.
   *
   * @param pkmn - pokemon data
   *
   */
    onMouseOver(pkmn: PokemonCapture): void{
      this.currentSrcImg = pkmn.pokemonImageUrlBack;
    }
    /**
     *
     * When the mouse is no longer over the pokemon, the pokemon returns to its original state.
     *
     * @param pkmn - pokemon data
     *
     */
    onMouseOut(pkmn: PokemonCapture): void{
      this.currentSrcImg = pkmn.pokemonImageUrlFront;
    }
}
