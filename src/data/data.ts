import { Potion } from "../types/Potion";

export const potions: Potion[] = [
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
    id: "potion_003",
    name: "Elixir of Acolyte Terror",
    type: "consumable",
    rarity: "legendary",
    effects: {
      primary: {
        attribute: "fireResistance",
        value: 35,
        duration: {
          unit: "minutes",
          amount: 12,
        },
      },
      secondary: [
        {
          attribute: "ElementalResistance",
          value: 18,
          duration: {
            unit: "seconds",
            amount: 300,
          },
        },
        {
          attribute: "ManaBoost",
          value: 11,
          duration: {
            unit: "minutes",
            amount: 2,
          },
        },
      ],
    },
    ingredients: [
      {
        name: "Ice Dust",
        quantity: 21,
        origin: {
          location: "Iceland Island",
          region: "Sad Valley",
        },
      },
      {
        name: "Schapular Risk",
        quantity: 3,
        origin: {
          location: "Dark Dome",
          region: "Beneath of Rustain",
        },
      },
      {
        name: "Ethazium Extract",
        quantity: 32,
        origin: {
          location: "Pork Royal",
          region: "Redeam",
        },
      },
    ],
    crafting: {
      station: "Monk's Sign",
      required_level: 28,
      time: {
        unit: "minutes",
        amount: 38,
      },
    },
    usage: {
      instructions: [
        "Shake well before use.",
        "Drink entirely to activate the effects.",
        "Avoid exposure to water for 3 minutes after consumption.",
      ],
      restrictions: {
        levelRequirement: 12,
        classRestrictions: ["Black Mage", "Necrophil"],
        warnings: ["Drink free."],
      },
    },
    meta: {
      created_by: "Grand Alchemist Oculor",
      lore: "Crafted from the essence of eternal darkness, this potion grants unmatched resistance and power to those who dare consume it.",
      availability: {
        in_shops: false,
        quest_reward: true,
        drop_rate: {
          boss: "Common Elite Elf",
          chance: "75%",
        },
      },
    },
    image: "image_3.webp",
  },
  {
    id: "potion_004",
    name: "Vial of Shifting Shadows",
    type: "consumable",
    rarity: "legendary",
    effects: {
      primary: {
        attribute: "stealth",
        value: 70,
        duration: {
          unit: "minutes",
          amount: 10,
        },
      },
      secondary: [
        {
          attribute: "movementSpeed",
          value: 20,
          duration: {
            unit: "minutes",
            amount: 5,
          },
        },
        {
          attribute: "dodgeChance",
          value: 15,
          duration: {
            unit: "minutes",
            amount: 10,
          },
        },
      ],
    },
    ingredients: [
      {
        name: "Shadow Essence",
        quantity: 1,
        origin: {
          location: "Twilight Grove",
          region: "Duskmire Forest",
        },
      },
      {
        name: "Nightshade Extract",
        quantity: 2,
        origin: {
          location: "Moonlit Clearing",
          region: "Ebonshade Vale",
        },
      },
      {
        name: "Silkspider Thread",
        quantity: 3,
        origin: {
          location: "Webbed Hollow",
          region: "Silken Abyss",
        },
      },
    ],
    crafting: {
      station: "Shadowweaver's Table",
      required_level: 22,
      time: {
        unit: "minutes",
        amount: 50,
      },
    },
    usage: {
      instructions: [
        "Use in areas of low light for maximum efficacy.",
        "Do not expose to direct sunlight before consumption.",
      ],
      restrictions: {
        levelRequirement: 18,
        classRestrictions: ["Rogue", "Assassin", "Shadowdancer"],
        warnings: [
          "May cause temporary disorientation.",
          "Avoid use during bright daylight.",
        ],
      },
    },
    meta: {
      created_by: "Shadebinder Malkor",
      lore: "Forged in the depths of shadow, this potion grants its user an ethereal connection to the unseen.",
      availability: {
        in_shops: true,
        quest_reward: true,
        drop_rate: {
          boss: "Shadow Drake",
          chance: "4%",
        },
      },
    },
    image: "image_4.webp",
  },
  {
    id: "potion_005",
    name: "Elixir of Arcane Surge",
    type: "consumable",
    rarity: "legendary",
    effects: {
      primary: {
        attribute: "spellPower",
        value: 100,
        duration: {
          unit: "minutes",
          amount: 10,
        },
      },
      secondary: [
        {
          attribute: "manaRegeneration",
          value: 20,
          duration: {
            unit: "seconds",
            amount: 300,
          },
        },
        {
          attribute: "cooldownReduction",
          value: 15,
          duration: {
            unit: "minutes",
            amount: 8,
          },
        },
      ],
    },
    ingredients: [
      {
        name: "Arcane Crystal",
        quantity: 2,
        origin: {
          location: "Crystal Spire",
          region: "Mystic Highlands",
        },
      },
      {
        name: "Enchanted Powder",
        quantity: 3,
        origin: {
          location: "Mage's Sanctum",
          region: "Astral Plains",
        },
      },
      {
        name: "Moonlit Dew",
        quantity: 1,
        origin: {
          location: "Silverlake Grove",
          region: "Lunar Valley",
        },
      },
    ],
    crafting: {
      station: "Arcane Altar",
      required_level: 30,
      time: {
        unit: "minutes",
        amount: 60,
      },
    },
    usage: {
      instructions: [
        "Consume during spellcasting for enhanced power.",
        "Avoid overuse to prevent magical feedback.",
      ],
      restrictions: {
        levelRequirement: 25,
        classRestrictions: ["Mage", "Sorcerer", "Spellbinder"],
        warnings: [
          "May cause temporary mana burn.",
          "Not effective in anti-magic zones.",
        ],
      },
    },
    meta: {
      created_by: "Archmage Solarin",
      lore: "Infused with the essence of raw arcane energy, this potion empowers mages to reach new heights of spellcasting mastery.",
      availability: {
        in_shops: false,
        quest_reward: true,
        drop_rate: {
          boss: "Elder Elemental",
          chance: "7%",
        },
      },
    },
    image: "image_5.webp",
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
  {
    id: "potion_007",
    name: "Elixir of Shadows",
    type: "consumable",
    rarity: "legendary",
    effects: {
      primary: {
        attribute: "invisibility",
        value: 100,
        duration: {
          unit: "seconds",
          amount: 60,
        },
      },
      secondary: [
        {
          attribute: "stealth",
          value: 50,
          duration: {
            unit: "minutes",
            amount: 10,
          },
        },
      ],
    },
    ingredients: [
      {
        name: "Nightshade Petals",
        quantity: 2,
        origin: {
          location: "Shadow Glen",
          region: "Obsidian Vale",
        },
      },
      {
        name: "Ethereal Dust",
        quantity: 1,
        origin: {
          location: "Cavern of Whispers",
          region: "Phantom Reaches",
        },
      },
      {
        name: "Void Essence",
        quantity: 1,
        origin: {
          location: "Abyssal Rift",
          region: "Dark Abyss",
        },
      },
    ],
    crafting: {
      station: "Shadowforge Altar",
      required_level: 25,
      time: {
        unit: "hours",
        amount: 1,
      },
    },
    usage: {
      instructions: [
        "Consume to become one with the shadows.",
        "Avoid direct sunlight during the effect.",
      ],
      restrictions: {
        levelRequirement: 20,
        classRestrictions: ["Rogue", "Assassin", "Necromancer"],
        warnings: [
          "May cause dizziness after expiration.",
          "Repeated use can attract unwanted attention from the Shadow Council.",
        ],
      },
    },
    meta: {
      created_by: "Alchemist Eryndor",
      lore: "A potion forged in the darkest corners of the realm, granting unparalleled stealth to those daring enough to consume it.",
      availability: {
        in_shops: false,
        quest_reward: true,
        drop_rate: {
          boss: "Phantom Warden",
          chance: "5%",
        },
      },
    },
    image: "image_7.webp",
  },
  {
    id: "potion_008",
    name: "Phoenixfire Draught",
    type: "consumable",
    rarity: "mythic",
    effects: {
      primary: {
        attribute: "resurrection",
        value: 100,
        duration: {
          unit: "instant",
          amount: 0,
        },
      },
      secondary: [
        {
          attribute: "fireResistance",
          value: 70,
          duration: {
            unit: "minutes",
            amount: 15,
          },
        },
        {
          attribute: "burningAura",
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
        name: "Phoenix Feather",
        quantity: 1,
        origin: {
          location: "Ashen Peaks",
          region: "Infernal Ridge",
        },
      },
      {
        name: "Emberheart",
        quantity: 2,
        origin: {
          location: "Molten Caves",
          region: "Blazing Wastes",
        },
      },
      {
        name: "Lava Crystal",
        quantity: 1,
        origin: {
          location: "Crimson Chasm",
          region: "Magma Depths",
        },
      },
    ],
    crafting: {
      station: "Pyromancer's Crucible",
      required_level: 30,
      time: {
        unit: "hours",
        amount: 3,
      },
    },
    usage: {
      instructions: [
        "Drink to rise from ashes upon defeat.",
        "Recommended for use during critical battles.",
      ],
      restrictions: {
        levelRequirement: 25,
        classRestrictions: ["Mage", "Paladin", "Sorcerer"],
        warnings: [
          "Single-use only; effects are irreversible.",
          "Improper storage may neutralize the potion's potency.",
        ],
      },
    },
    meta: {
      created_by: "Grand Pyromancer Elyndra",
      lore: "A mythical draught imbued with the power of the phoenix, capable of restoring life to the fallen and shielding the bearer with flames of rebirth.",
      availability: {
        in_shops: false,
        quest_reward: true,
        drop_rate: {
          boss: "Ashen Guardian",
          chance: "3%",
        },
      },
    },
    image: "image_8.webp",
  },
  {
    id: "potion_009",
    name: "Stormcaller's Brew",
    type: "consumable",
    rarity: "epic",
    effects: {
      primary: {
        attribute: "lightningDamage",
        value: 120,
        duration: {
          unit: "minutes",
          amount: 10,
        },
      },
      secondary: [
        {
          attribute: "movementSpeed",
          value: 30,
          duration: {
            unit: "minutes",
            amount: 5,
          },
        },
        {
          attribute: "criticalStrikeChance",
          value: 15,
          duration: {
            unit: "minutes",
            amount: 10,
          },
        },
      ],
    },
    ingredients: [
      {
        name: "Thundergrass",
        quantity: 3,
        origin: {
          location: "Stormspire Cliffs",
          region: "Tempest Valley",
        },
      },
      {
        name: "Charged Crystal Shard",
        quantity: 1,
        origin: {
          location: "Sparkling Caverns",
          region: "Skybreaker Peaks",
        },
      },
      {
        name: "Essence of the Storm",
        quantity: 2,
        origin: {
          location: "Eye of the Maelstrom",
          region: "Tempest Abyss",
        },
      },
    ],
    crafting: {
      station: "Elementalist's Altar",
      required_level: 28,
      time: {
        unit: "hours",
        amount: 2,
      },
    },
    usage: {
      instructions: [
        "Consume to unleash the fury of the storm.",
        "Avoid using near water bodies.",
      ],
      restrictions: {
        levelRequirement: 24,
        classRestrictions: ["Mage", "Shaman", "Elementalist"],
        warnings: [
          "Overuse may cause static shock.",
          "Prolonged exposure can induce hyperactivity.",
        ],
      },
    },
    meta: {
      created_by: "High Elementalist Zarael",
      lore: "Infused with the essence of a storm's wrath, this brew grants its user the power to command lightning and speed across the battlefield.",
      availability: {
        in_shops: true,
        quest_reward: false,
        drop_rate: {
          boss: "Tempest Lord",
          chance: "7%",
        },
      },
    },
    image: "image_9.webp",
  },
  {
    id: "potion_010",
    name: "Draught of Eternity",
    type: "consumable",
    rarity: "mythic",
    effects: {
      primary: {
        attribute: "immortality",
        value: 100,
        duration: {
          unit: "seconds",
          amount: 300,
        },
      },
      secondary: [
        {
          attribute: "timeSlow",
          value: 50,
          duration: {
            unit: "seconds",
            amount: 30,
          },
        },
        {
          attribute: "regeneration",
          value: 100,
          duration: {
            unit: "seconds",
            amount: 300,
          },
        },
      ],
    },
    ingredients: [
      {
        name: "Temporal Lotus",
        quantity: 1,
        origin: {
          location: "Chronos Gardens",
          region: "Timeless Vale",
        },
      },
      {
        name: "Essence of Infinity",
        quantity: 1,
        origin: {
          location: "Echoing Caverns",
          region: "Void Nexus",
        },
      },
      {
        name: "Stardust Veil",
        quantity: 2,
        origin: {
          location: "Celestial Fields",
          region: "Astral Heights",
        },
      },
    ],
    crafting: {
      station: "Chronomancer's Forge",
      required_level: 35,
      time: {
        unit: "hours",
        amount: 5,
      },
    },
    usage: {
      instructions: [
        "Drink to transcend time and death temporarily.",
        "Best used in dire circumstances.",
      ],
      restrictions: {
        levelRequirement: 30,
        classRestrictions: ["Chronomancer", "Seer", "Eternal Guardian"],
        warnings: [
          "Excessive use may disrupt the timeline.",
          "Side effects include temporal disorientation.",
        ],
      },
    },
    meta: {
      created_by: "Archmage Thaelos",
      lore: "Crafted in the forges of eternity, this potion bends the very fabric of time to grant the user a fleeting taste of immortality.",
      availability: {
        in_shops: false,
        quest_reward: true,
        drop_rate: {
          boss: "Chrono Warden",
          chance: "2%",
        },
      },
    },
    image: "image_10.webp",
  },
];