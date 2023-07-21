import { IPokemon } from "@core/types/pokemon-types";
import { PokemonRepository } from "@domain/pokemon/application/repositories/pokemonRepository";
import axios from "axios";

const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export class PokemonAxiosRepository implements PokemonRepository {
  async fetchPokemonByName(name: string): Promise<IPokemon | null> {
    try {
      const response = await pokemonApi.get(`pokemon/${name}`);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
