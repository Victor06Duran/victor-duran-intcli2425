import { IngredientOrigin } from "./IngredientOrigin";

export interface Ingredient {
    name: string;
    quantity: number;
    origin: IngredientOrigin;
  }