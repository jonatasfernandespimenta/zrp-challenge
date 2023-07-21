import { IAbilities, IPokemon } from "@core/types/pokemon-types";

export interface PokemonRepository {
  fetchPokemonByName(name: string): Promise<IPokemon | null>;
}
