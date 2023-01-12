export interface PokemonInterface {
  id: string,
  name: string,
  sprites: Sprites,
  types: Type[],
}
export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}
export interface Type2 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}
