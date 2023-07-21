import { beforeEach, describe, expect, it } from "vitest";
import { FetchPokemonAbilityUseCase } from "./fetch-pokemon-ability";
import { InMemoryPokemonRepository } from "tests/repository/inMemoryPokemonRepository";

let sut: FetchPokemonAbilityUseCase;
let repository: InMemoryPokemonRepository;

describe("Fetch Pokemon Ability", () => {
  beforeEach(() => {
    repository = new InMemoryPokemonRepository();
    sut = new FetchPokemonAbilityUseCase(repository);
  });

  it("Should fetch all pokemon abilities names in aphabetically order", async () => {
    const ditto = await repository.fetchPokemonByName("ditto");

    const expectedResult = ditto?.abilities
      .map((ability) => {
        return ability.ability.name;
      })
      .sort();

    const { abilities } = await sut.execute({ name: "ditto" });

    expect(abilities).toHaveLength(3);
    expect(abilities).toStrictEqual(expectedResult);
  });
});
