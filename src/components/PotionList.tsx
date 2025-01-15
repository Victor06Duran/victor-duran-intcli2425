import { useState } from "react";
import { calculateCraftingTime, filterByLevelRequirement, findPotionByEffect, getPotionsByRarity } from "../helpers/PotionHelpers";
import { potions } from "../data/data";
import { Potion } from "../types/Potion";

const PotionFilters: React.FC = () => {

  const [level, setLevel] = useState(0);
  const [rarity, setRarity] = useState("");
  const [effect, setEffect] = useState("");
  const [filteredPotions, setFilteredPotions] = useState(potions);
  const [craftTime, setCraftTime] = useState<number | null>(null);
  const [selectedPotion, setSelectedPotion] = useState<Potion | null>(null);

  const applyFilters = () => {
    let result = potions;
    if (level > 0) result = filterByLevelRequirement(result, level);
    if (rarity) result = getPotionsByRarity(result, rarity);
    if (effect) result = findPotionByEffect(result, effect);
    setFilteredPotions(result);
    setCraftTime(null)
  };

  const calculateTime = () => {
    setCraftTime(calculateCraftingTime(filteredPotions));
  };

  return (
    <div className="p-1">

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 m-2">
        {filteredPotions.map((potion) => (
          <div
            key={potion.id}
            className="bg-black text-white p-4 rounded shadow-md flex flex-col items-center bg-opacity-50"
          >
            <img
              src={potion.image}
              alt={potion.name}
              className="w-[60%] h-[60%] object-cover rounded-sm mb-4"
            />
            <h3 className="text-lg font-semibold text-yellow-600">{potion.name}</h3>
            <p className="text-sm text-white">Rarity: {potion.rarity}</p>
            <p className="text-sm text-white">
              Dropped by: {potion.meta.availability.drop_rate.boss} ({potion.meta.availability.drop_rate.chance})
            </p>
            <button
              className="mt-4 bg-gray-950 text-white py-2 px-4 rounded hover:bg-yellow-600"
              onClick={() => setSelectedPotion(potion)}
            >
              View Details
            </button>
          </div>
        ))}

        {selectedPotion && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center ">
            <div className="bg-black p-6 w-full max-w-3xl border border-yellow-600 rounded-lg shadow bg-opacity-80">
              <button
                className="text-yellow-800 font-bold text-lg z-1 hover:bg-gray-950"
                onClick={() => setSelectedPotion(null)}

              >
                Close
              </button>
              <img
                src={selectedPotion.image}
                alt={selectedPotion.name}
                className="w-[40%] h-[40%] object-cover rounded-sm mb-4 row-span-5 row-start-5 flex justify-center place-content-center"
              />
              <h2 className="text-2xl font-bold mb-4 text-yellow-600">{selectedPotion.name}</h2>
              <p className="text-purple-700 mb-2">Rarity: {selectedPotion.rarity}</p>

              <h3 className="font-semibold">Primary Effects:</h3>
              <p className="text-gray-200">
                {selectedPotion.effects.primary.attribute}:{" "}
                {selectedPotion.effects.primary.value} (
                {selectedPotion.effects.primary.duration.amount}{" "}
                {selectedPotion.effects.primary.duration.unit})
              </p>

              <h3 className="font-semibold mt-4">Secondary Effects:</h3>
              <ul className="list-disc ml-6 text-gray-300">
                {selectedPotion.effects.secondary.map((effect, index) => (
                  <p key={index}>
                    {effect.attribute}: {effect.value} ({effect.duration.amount}{" "}
                    {effect.duration.unit})
                  </p>
                ))}
              </ul>

              <h3 className="font-semibold mt-4">Ingredients:</h3>
              <ul className="list-disc ml-6 text-gray-200">
                {selectedPotion.ingredients.map((ingredient, index) => (
                  <p key={index}>
                    {ingredient.name} - {ingredient.origin.location} (
                    {ingredient.origin.region})
                  </p>
                ))}
              </ul>

              <p className="text-sm text-purple-300 mt-4">
                Crafted by: {selectedPotion.meta.created_by}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <div>
          <label htmlFor="levelFilter" className="block text-sm font-medium text-gray-100">
            Level Filter (0-100)
          </label>
          <input
            type="range"
            id="levelFilter"
            min="0"
            max="100"
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            className="w-[90%] mt-2"
          />
          <p className="text-yellow-600 text-sm">Selected Level: {level}</p>
        </div>
        <div>
          <label htmlFor="rarityFilter" className="block text-sm font-medium text-gray-100">
            Rarity Filter
          </label>
          <select
            id="rarityFilter"
            value={rarity}
            onChange={(e) => setRarity(e.target.value)}
            className="w-[50%] mt-2 p-2 border rounded text-yellow-500"
          >
            <option value="">All</option>
            <option value="legendary">Legendary</option>
            <option value="epic">Epic</option>
            <option value="mythic">Mythic</option>
          </select>
        </div>
        <div>
          <label htmlFor="effectFilter" className="block text-sm font-medium text-gray-100">
            Effect Filter
          </label>
          <input
            type="text"
            id="effectFilter"
            placeholder="Type the desired effect here..."
            value={effect}
            onChange={(e) => setEffect(e.target.value)}
            className="w-[80%] mt-2 p-2 border rounded text-yellow-500"
          />
        </div>

        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-gray-800 m-4 "
          onClick={calculateTime}
        >
          Calculate Crafting Time
        </button>

        <div>
          {craftTime !== null && (
            <p className="mt-4 text-lg text-gray-100">Total Crafting Time: {craftTime} minutes</p>
          )}
        </div>

        <button
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-gray-800 m-4"
          onClick={applyFilters}
        >
          Apply Filters
        </button>

      </div>
    </div>
  );
};

export default PotionFilters;