import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/Services/pokemon-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-pkmn',
  templateUrl: './pkmn.component.html',
  styleUrls: ['./pkmn.component.scss']
})
export class PkmnComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  constructor( public pkmnRequest: PokemonServiceService ) { }

  ngOnInit(): void {
    this.subscription = this.pkmnRequest.getPkmnObservable().subscribe(
      (value: Object ) => {
        console.log(value);
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
