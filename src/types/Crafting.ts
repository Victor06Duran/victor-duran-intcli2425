import { CraftingTime } from "./CraftingTime";

export interface Crafting {
    station: string;
    required_level: number;
    time: CraftingTime;
  }