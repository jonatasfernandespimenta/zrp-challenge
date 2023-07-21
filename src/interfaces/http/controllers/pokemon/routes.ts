import { FastifyInstance } from "fastify";
import { fetchPokemonAbilities } from "./fetchPokemonAbility";

export async function pokemonRoutes(app: FastifyInstance) {
  app.get("/pokemon/:name", fetchPokemonAbilities);
}
