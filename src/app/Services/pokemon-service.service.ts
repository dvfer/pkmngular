import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  pkmn!: Object;
  constructor( private http: HttpClient) { }

  /**
   * Returns a random number between two numbers.
   *
   * @param min - lower limit of the interval
   * @param max - upper limit of the interval
   * @returns a random number.
   *
   */
  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }


  /**
   *
   * Returns an observable of a pokemon with an id between 1 and 905.
   *
   *
   * @returns an observable.
   */
  getPkmnObservable(): Observable< Object >{
    return  this.http.get< Object >(`https://pokeapi.co/api/v2/pokemon/${this.randomInteger(1,905)}`)
  }
}
