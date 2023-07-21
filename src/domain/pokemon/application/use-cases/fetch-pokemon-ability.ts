import { PokemonRepository } from "../repositories/pokemonRepository";

interface FetchPokemonAbilityUseCaseRequest {
  name: string;
}

interface FetchPokemonAbilityUseCaseResponse {
  abilities: string[] | null;
}

export class FetchPokemonAbilityUseCase {
  constructor(private pokemonRepository: PokemonRepository) {}

  async execute({
    name,
  }: FetchPokemonAbilityUseCaseRequest): Promise<FetchPokemonAbilityUseCaseResponse> {
    const pokemon = await this.pokemonRepository.fetchPokemonByName(name);

    if (pokemon) {
      const sortedAbilities = pokemon.abilities
        .map((ability) => {
          return ability.ability.name;
        })
        .sort();

      return { abilities: sortedAbilities };
    }

    return { abilities: null };
  }
}
