import { PokemonAxiosRepository } from "src/libs/axios/pokemon-api";
import { FetchPokemonAbilityUseCase } from "../fetch-pokemon-ability";

export async function makeFetchPokemonAbilityUseCase() {
  const repository = new PokemonAxiosRepository();
  const fetchPokemonAbilitiesUseCase = new FetchPokemonAbilityUseCase(
    repository
  );

  return fetchPokemonAbilitiesUseCase;
}
