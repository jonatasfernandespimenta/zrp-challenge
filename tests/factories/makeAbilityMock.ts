import { IAbilities } from "@core/types/pokemon-types";
import { faker } from "@faker-js/faker";

export default function makeAbilitiesMock(): IAbilities[] {
  return [
    {
      ability: {
        name: faker.word.adverb(),
        url: faker.internet.url(),
      },
      isHidden: false,
      slot: faker.number.int(),
    },
    {
      ability: {
        name: faker.word.adverb(),
        url: faker.internet.url(),
      },
      isHidden: false,
      slot: faker.number.int(),
    },
    {
      ability: {
        name: faker.word.adverb(),
        url: faker.internet.url(),
      },
      isHidden: false,
      slot: faker.number.int(),
    },
  ];
}
