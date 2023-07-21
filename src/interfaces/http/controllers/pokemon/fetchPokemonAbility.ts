import { makeFetchPokemonAbilityUseCase } from "@domain/pokemon/application/use-cases/factories/makeFetchPokemonAbilityUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function fetchPokemonAbilities(
  req: FastifyRequest,
  res: FastifyReply
) {
  const fetchPokemonAbilitiesQuerySchema = z.object({
    name: z.string(),
  });

  const { name } = fetchPokemonAbilitiesQuerySchema.parse(req.params);

  const fetchPokemonAbilityUseCase = await makeFetchPokemonAbilityUseCase();

  const { abilities } = await fetchPokemonAbilityUseCase.execute({ name });

  return res.status(200).send(abilities);
}
