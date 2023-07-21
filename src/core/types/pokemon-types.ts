export interface IAbility {
  name: string;
  url: string;
}

export interface IAbilities {
  ability: IAbility;
  isHidden: boolean;
  slot: number;
}

export interface IPokemon {
  abilities: IAbilities[];
  name: string;
}
