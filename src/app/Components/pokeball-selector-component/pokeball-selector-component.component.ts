import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInfo } from '@angular/fire/auth';
import {  Timestamp } from '@firebase/firestore';
import {MenuItem} from 'primeng/api';
import { PokemonCapture } from 'src/app/Interfaces/pokemon-capture';
import { PokemonInterface } from 'src/app/Interfaces/pokemon-interface';
import { AuthServiceService } from 'src/app/Services/Auth/auth-service.service';
import { PokemonCaptureServiceService } from 'src/app/Services/Pokemon/pokemon-capture-service.service';
import { PokemonServiceService } from 'src/app/Services/Pokemon/pokemon-service.service';
@Component({
  selector: 'app-pokeball-selector-component',
  templateUrl: './pokeball-selector-component.component.html',
  styleUrls: ['./pokeball-selector-component.component.scss']
})
export class PokeballSelectorComponentComponent implements OnInit {
  @Input() pkmn!:PokemonInterface;
  @Output("genRandomPkmn") genRandomPkmn: EventEmitter<void> = new EventEmitter();
  userInfo!: UserInfo | null;
  items!: MenuItem[];

  constructor( public pkmnService: PokemonServiceService, public auth: AuthServiceService, public pkmnCaptureService: PokemonCaptureServiceService) { }
  ngOnInit(): void {
    this.items = [
      {label: 'Let Escape', command : () =>  this.genRandomPkmn.emit()},
      {label: 'Poké Ball', icon: 'pokeball',command : () => this.capture(this.throwPokeball(0.25), this.genPokemonCapture()) },
      {label: 'Ultra Ball', icon: 'ultraball',command : () => this.capture(this.throwPokeball(0.70), this.genPokemonCapture()) },
      {label: 'Master Ball', icon: 'masterball',command : () => this.capture(this.throwPokeball(1), this.genPokemonCapture()) },
    ];
    this.auth.getObservableCurrentUser.subscribe( (value: UserInfo|null) => {
      if (value){
        this.userInfo = value;}
    })
  }

  /**
   * Returns a boolean, true if the throw is success, false if the throw is failure.
   *
   * @param probability - The probability associated with the pokeball type.
   * @returns A boolean associated with the throw success.
   */
  throwPokeball(probability: number): Boolean{
    const rand = Math.random();
    return (rand <= probability)
  }

  /**
   *
   * Using the PokemonCaptureService send to firestore the information about the capture.
   *
   * @param bool - The capture success.
   *
   * @param capture - Information about the capture, userId, pokemon Id, etc.
   *
   */
  capture(bool: Boolean, capture: PokemonCapture ): void{
    if (bool) {
      this.pkmnCaptureService.addCapture(capture)
    }
    else{
      console.log('Oh no! The pokemon broke free!')
    }
    this.genRandomPkmn.emit()
  }
  /**
   * Returns a data structure with the capture information.
   *
   * @returns the information about the capture.
   *
   */
  genPokemonCapture(): PokemonCapture{
    return {
      userId: this.userInfo!.uid,

      pokemonId: this.pkmn.id,

      captureTime: Timestamp.fromDate(new Date()),

      pokemonName: this.pkmn.name,

      pokemonType: this.pkmn.types.length > 1 ? ( this.pkmn.types[0].type.name + '-' + this.pkmn.types[1].type.name) : ( this.pkmn.types[0].type.name),

      pokemonImageUrlFront: this.pkmn.sprites.front_default,

      pokemonImageUrlBack: this.pkmn.sprites.back_default
    }
  }
}

