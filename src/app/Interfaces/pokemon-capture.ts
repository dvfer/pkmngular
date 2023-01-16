import { Timestamp } from "@angular/fire/firestore";
export interface PokemonCapture {

  userId: string;

  pokemonId: string;

  captureTime: Timestamp ;

  pokemonName: string;

  pokemonType: string;

  pokemonImageUrlFront: string;

  pokemonImageUrlBack: string;

}
