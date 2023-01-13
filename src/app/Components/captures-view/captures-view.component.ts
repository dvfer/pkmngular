import { Component, OnInit } from '@angular/core';
import { UserInfo } from '@angular/fire/auth';
import { Observable, of, switchMap } from 'rxjs';
import { PokemonData } from 'src/app/Interfaces/pokemon-data';
import { AuthServiceService } from 'src/app/Services/Auth/auth-service.service';
import { PokemonCaptureServiceService } from 'src/app/Services/Pokemon/pokemon-capture-service.service';
@Component({
  selector: 'app-captures-view',
  templateUrl: './captures-view.component.html',
  styleUrls: ['./captures-view.component.scss']
})
export class CapturesViewComponent {
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
}
