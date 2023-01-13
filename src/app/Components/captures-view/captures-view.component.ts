import { Component, OnInit } from '@angular/core';
import { UserInfo } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { PokemonData } from 'src/app/Interfaces/pokemon-data';
import { AuthServiceService } from 'src/app/Services/Auth/auth-service.service';
import { PokemonCaptureServiceService } from 'src/app/Services/Pokemon/pokemon-capture-service.service';
@Component({
  selector: 'app-captures-view',
  templateUrl: './captures-view.component.html',
  styleUrls: ['./captures-view.component.scss']
})
export class CapturesViewComponent implements OnInit {
  observablePkmn$!: Observable< PokemonData[] >;
  constructor(public auth: AuthServiceService, public pkmnService: PokemonCaptureServiceService) { }

  ngOnInit(): void {
    this.auth.getObservableCurrentUser.subscribe( (value: UserInfo | null) => {
      if (value){
        this.assign(value);
      }
    });
    }
  /**
   *
   * Set the value of observablePkmn$
   *
   */
  async assign(userInfo: UserInfo){
    this.observablePkmn$ = this.pkmnService.getCaptures(userInfo.uid);
  }
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
