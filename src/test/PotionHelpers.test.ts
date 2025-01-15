import { calculateCraftingTime, filterByLevelRequirement, findPotionByEffect, getPotionsByRarity, listIngredients } from "../helpers/PotionHelpers";
import { Potion } from "../types/Potion";

const mockPotions: Potion[] = [
  {
    id: "potion_001",
    name: "Elixir of Eternal Flame",
    type: "consumable",
    rarity: "legendary",
    effects: {
      primary: {
        attribute: "fireResistance",
        value: 80,
        duration: {
          unit: "minutes",
          amount: 15,
        },
      },
      secondary: [
        {
          attribute: "healthRegeneration",
          value: 10,
          duration: {
            unit: "seconds",
            amount: 300,
          },
        },
        {
          attribute: "staminaBoost",
          value: 25,
          duration: {
            unit: "minutes",
            amount: 5,
          },
        },
      ],
    },
    ingredients: [
      {
        name: "Phoenix Feather",
        quantity: 1,
        origin: {
          location: "Volcanic Crater",
          region: "Everburning Peaks",
        },
      },
      {
        name: "Molten Ember",
        quantity: 3,
        origin: {
          location: "Infernal Forge",
          region: "Depths of Agnarok",
        },
      },
      {
        name: "Flameflower Extract",
        quantity: 2,
        origin: {
          location: "Ashen Fields",
          region: "Blazing Steppes",
        },
      },
    ],
    crafting: {
      station: "Alchemist's Crucible",
      required_level: 25,
      time: {
        unit: "minutes",
        amount: 45,
      },
    },
    usage: {
      instructions: [
        "Shake well before use.",
        "Drink entirely to activate the effects.",
        "Avoid exposure to water for 10 minutes after consumption.",
      ],
      restrictions: {
        levelRequirement: 15,
        classRestrictions: ["Fire Mage", "Pyromancer", "Elemental Shaman"],
        warnings: [
          "Do not mix with Ice-based potions.",
          "May cause temporary overheating symptoms.",
        ],
      },
    },
    meta: {
      created_by: "Grand Alchemist Tharion",
      lore: "Crafted from the essence of eternal flames, this potion grants unmatched resistance and power to those who dare consume it.",
      availability: {
        in_shops: false,
        quest_reward: true,
        drop_rate: {
          boss: "Infernal Dragon",
          chance: "5%",
        },
      },
    },
    image: "image_1.webp",
  },
  {
    id: "potion_002",
    name: "Essence of Frostbound Will",
    type: "consumable",
    rarity: "legendary",
    effects: {
      primary: {
        attribute: "iceResistance",
        value: 85,
        duration: {
          unit: "minutes",
          amount: 20,
        },
      },
      secondary: [
        {
          attribute: "manaRegeneration",
          value: 15,
          duration: {
            unit: "seconds",
            amount: 120,
          },
        },
        {
          attribute: "focusBoost",
          value: 30,
          duration: {
            unit: "minutes",
            amount: 10,
          },
        },
      ],
    },
    ingredients: [
      {
        name: "Frostbloom Petals",
        quantity: 2,
        origin: {
          location: "Frozen Glade",
          region: "Everwhite Tundra",
        },
      },
      {
        name: "Ice Crystal Shard",
        quantity: 3,
        origin: {
          location: "Glacier Cavern",
          region: "Shivering Expanse",
        },
      },
      {
        name: "Chilled Essence",
        quantity: 1,
        origin: {
          location: "Frozen Waterfall",
          region: "Icy Veil",
        },
      },
    ],
    crafting: {
      station: "Frostforge Lab",
      required_level: 28,
      time: {
        unit: "minutes",
        amount: 60,
      },
    },
    usage: {
      instructions: [
        "Consume in freezing temperatures for optimal effects.",
        "Do not expose to open flames.",
      ],
      restrictions: {
        levelRequirement: 20,
        classRestrictions: ["Frost Sorcerer", "Cryomancer", "Elemental Shaman"],
        warnings: [
          "May cause temporary cold sensitivity.",
          "Do not combine with fire-based potions.",
        ],
      },
    },
    meta: {
      created_by: "Icecaster Elowen",
      lore: "A potion imbued with the eternal frost, granting resilience and clarity even in the harshest winters.",
      availability: {
        in_shops: true,
        quest_reward: false,
        drop_rate: {
          boss: "Glacial Titan",
          chance: "3%",
        },
      },
    },
    image: "image_2.webp",
  },
  {
    id: "potion_006",
    name: "Essence of Eternal Vitality",
    type: "consumable",
    rarity: "epic",
    effects: {
      primary: {
        attribute: "healthRegeneration",
        value: 50,
        duration: {
          unit: "seconds",
          amount: 120,
        },
      },
      secondary: [
        {
          attribute: "maxHealth",
          value: 100,
          duration: {
            unit: "minutes",
            amount: 5,
          },
        },
      ],
    },
    ingredients: [
      {
        name: "Heartroot Blossom",
        quantity: 1,
        origin: {
          location: "Emerald Glade",
          region: "Verdant Expanse",
        },
      },
      {
        name: "Crimson Nectar",
        quantity: 2,
        origin: {
          location: "Scarlet Hollow",
          region: "Bloodwood Thicket",
        },
      },
      {
        name: "Golden Leaf",
        quantity: 1,
        origin: {
          location: "Sunlit Grove",
          region: "Aurora Meadows",
        },
      },
    ],
    crafting: {
      station: "Druidic Cauldron",
      required_level: 20,
      time: {
        unit: "minutes",
        amount: 45,
      },
    },
    usage: {
      instructions: [
        "Drink to rejuvenate and enhance vitality.",
        "Not to be combined with other regenerative potions.",
      ],
      restrictions: {
        levelRequirement: 15,
        classRestrictions: ["Druid", "Paladin", "Warrior"],
        warnings: [
          "May cause minor fatigue after effects fade.",
          "Do not exceed the recommended dosage.",
        ],
      },
    },
    meta: {
      created_by: "Grandmaster Therion",
      lore: "A draught said to contain the life essence of ancient forests, bestowing unparalleled vigor to those who drink it.",
      availability: {
        in_shops: true,
        quest_reward: false,
        drop_rate: {
          boss: "Forest Sentinel",
          chance: "10%",
        },
      },
    },
    image: "image_6.webp",
  },
];

describe("Potion Helpers Test", () => {
  describe("filterByLevelRequirement: filters potions by their level requirement", () => {
    it("Should show potions that have the same or lower level as the user", () => {
      const result = filterByLevelRequirement(mockPotions, 15);
      expect(result).toHaveLength(2);
      expect(result[0].name).toBe("Elixir of Eternal Flame");
      expect(result[1].name).toBe("Essence of Eternal Vitality");
    });
    it("Should ignore potions that have higher level requirements", () => {
      const result = filterByLevelRequirement(mockPotions, 9);
      expect(result).toHaveLength(0);
    });
  });

  describe("getPotionsByRarity: filters potions by their rarity", () => {
    it("Should show potions that have the 'Legendary' rarity", () => {
      const result = getPotionsByRarity(mockPotions, "legendary");
      expect(result).toHaveLength(2);
      expect(result[0].name).toBe("Elixir of Eternal Flame");
      expect(result[1].name).toBe("Essence of Frostbound Will");
    });
    it("Shouldn't show potions that have any rarity other than 'Legendary'", () => {
      const result = getPotionsByRarity(mockPotions, "legendary");
      expect(result).not.toHaveLength(1);
    });
  });

  describe("listIngredients: lists the ingredients of a potion", () => {
    it("Should show the whole list of ingredients of a potion", () => {
      const ingredients = listIngredients(mockPotions[0]);
      expect(ingredients).toEqual(["Phoenix Feather", "Molten Ember", "Flameflower Extract"]);
    });
    it("Should detect if a list of ingredients is incomplete or wrong", () => {
      const wrongIngredients = listIngredients(mockPotions[0]);
      expect(wrongIngredients).not.toEqual(["Phoenix Feather", "Molten Ember", "Blue Extract"]);
      const incompleteIngredients = listIngredients(mockPotions[0]);
      expect(incompleteIngredients).not.toEqual(["Phoenix Feather", "Molten Ember"]);
    });
  });

  describe("findPotionByEffect: finds potions with a specific secondary effect", () => {
    it("Should show the potion that matches the selected secondary effect", () => {
      const result = findPotionByEffect(mockPotions, "healthRegeneration");
      expect(result).toHaveLength(1);
      expect(result[0].name).toEqual("Elixir of Eternal Flame");
    });
    it("Should know that a potion doesn't have the selected secondary effect", () => {
      const result = findPotionByEffect(mockPotions, "healthRegeneration");
      expect(result).toHaveLength(1);
      expect(result[0].name).not.toEqual("Essence of Frostbound Will");
    });
  });

  describe("calculateCraftingTime: calculates total crafting time in minutes for a list of potions", () => {
    it("Should show the time required to craft a list of potions", () => {
      const result = calculateCraftingTime(mockPotions);
      expect(result).toBe(150); 
    });
    it("Should know if the sum of the time required to craft the list of potions is incorrect", () => {
      const result = calculateCraftingTime(mockPotions);
      expect(result).not.toBe(105); 
    });
  });

});
