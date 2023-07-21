import { IAbilities, IPokemon } from "@core/types/pokemon-types";
import { PokemonRepository } from "@domain/pokemon/application/repositories/pokemonRepository";
import makeAbilitiesMock from "tests/factories/makeAbilityMock";

export class InMemoryPokemonRepository implements PokemonRepository {
  items: IPokemon[] = [
    {
      name: "ditto",
      abilities: makeAbilitiesMock(),
    },
  ];

  async fetchPokemonByName(name: string): Promise<IPokemon | null> {
    const pokemon = this.items.find((item) => item.name === name);

    if (!pokemon) {
      return null;
    }

    return pokemon;
  }
}
