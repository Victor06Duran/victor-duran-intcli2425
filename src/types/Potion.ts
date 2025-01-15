import { Crafting } from "./Crafting";
import { Ingredient } from "./Ingredient";
import { Meta } from "./Meta";
import { PrimaryEffects } from "./PrimaryEffects";
import { Usage } from "./Usage";

export interface Potion {
    id: string;
    name: string;
    type: string;
    rarity: string;
    effects: PrimaryEffects;
    ingredients: Ingredient[];
    crafting: Crafting;
    usage: Usage;
    meta: Meta;
    image: string;
  }