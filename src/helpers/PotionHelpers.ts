import { Potion } from "../types/Potion";
import { SecondaryEffect } from "../types/SecondaryEffect";

export function filterByLevelRequirement(potions: Potion[], level: number): Potion[] {
  return potions.filter((potion) => potion.usage.restrictions.levelRequirement <= level);
}

export function getPotionsByRarity(potions: Potion[], rarity: string): Potion[] {
  return potions.filter((potion) => potion.rarity === rarity);
}

export function listIngredients(potion: Potion): string[] {
  return potion.ingredients.map((ingredient) => ingredient.name);
}

export function findPotionByEffect(potions: Potion[], effect: string): Potion[] {
  return potions.filter((potion) =>
    potion.effects.secondary.some((secondaryEffect: SecondaryEffect) => secondaryEffect.attribute === effect)
  );
}

export function calculateCraftingTime(potions: Potion[]): number {
  return potions.reduce((totalTime, potion) => {
    const { amount, unit } = potion.crafting.time;
    const timeInMinutes = unit === "hours" ? amount * 60 : amount;
    return totalTime + timeInMinutes;
  }, 0);
}

