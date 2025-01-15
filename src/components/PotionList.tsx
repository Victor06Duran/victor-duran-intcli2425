import { useState } from "react";
import { calculateCraftingTime, filterByLevelRequirement, findPotionByEffect, getPotionsByRarity } from "../helpers/PotionHelpers";
import { potions } from "../data/data";
import { Potion } from "../types/Potion";
import '../fonts/kaotika.ttf'

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

      <div className="grid grid-cols-1 md:grid-cols-5 gap-1 m-2 ">
        {filteredPotions.map((potion) => (
          <div
            key={potion.id}
            className="bg-black text-white font-kaotika text-2xl p-4 rounded shadow-md flex flex-col items-center bg-opacity-50"
          >
            <img
              src={potion.image}
              alt={potion.name}
              className="w-[70%] h-[70%] object-cover rounded-sm"
            />
            <h3 className="text-2xl text-yellow-600 ">{potion.name}</h3>
            <p className="text-xl text-white">Rarity: {potion.rarity}</p>
            <p className="text-xl text-white">
              Dropped by: {potion.meta.availability.drop_rate.boss}
            </p>
            <p className="text-xl text-white">
              ({potion.meta.availability.drop_rate.chance})
            </p>
            <button
              className="mt-4 bg-gray-950 text-white py-2 px-4 text-xl rounded hover:bg-yellow-600"
              onClick={() => setSelectedPotion(potion)}
            >
              View Details
            </button>
          </div>
        ))}

        {selectedPotion && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center font-kaotika text-2xl">
            <div className="bg-black p-6 w-full max-w-3xl border border-yellow-600 rounded-lg shadow bg-opacity-80">
              <button
                className="text-yellow-800 font-bold text-4xl z-1 hover:bg-gray-950"
                onClick={() => setSelectedPotion(null)}

              >
                X
              </button>
              <h2 className="text-4xl font-bold mb-4 text-yellow-500">{selectedPotion.name}</h2>
              <p className="text-purple-700 mb-2">RARITY: {selectedPotion.rarity}</p>

              <div className="">
              <h3 className="font-semibold">PRIMARY EFFECTS:</h3>
              <p className="text-gray-200">
                {selectedPotion.effects.primary.attribute}:{" "}
                {selectedPotion.effects.primary.value} (
                {selectedPotion.effects.primary.duration.amount}{" "}
                {selectedPotion.effects.primary.duration.unit})
              </p>

              <h3 className="font-semibold mt-4">SECONDARY EFFECTS:</h3>
              <ul className="list-disc ml-6 text-gray-300">
                {selectedPotion.effects.secondary.map((effect, index) => (
                  <p key={index}>
                    {effect.attribute}: {effect.value} ({effect.duration.amount}{" "}
                    {effect.duration.unit})
                  </p>
                ))}
              </ul>
              </div>
              

              <h3 className="font-semibold mt-4">INGREDIENTS:</h3>
              <ul className="list-disc ml-6 text-gray-200">
                {selectedPotion.ingredients.map((ingredient, index) => (
                  <p key={index}>
                    {ingredient.name} - {ingredient.origin.location} (
                    {ingredient.origin.region})
                  </p>
                ))}
              </ul>
              <h3 className="font-semibold mt-4">LEVEL REQUIRED:</h3>

              <p className="text-2xl text-purple-100 mt-4">
                {selectedPotion.usage.restrictions.levelRequirement}
              </p>
              <h3 className="font-semibold mt-4">CLASS REQUIREMENT:</h3>

              <p className="text-2xl text-purple-100 mt-4" >
                {selectedPotion.usage.restrictions.classRestrictions} 
              </p>

              <ul className="list-disc ml-6 text-gray-300">
                {selectedPotion.usage.restrictions.classRestrictions.map((index) => (
                  <p key={index}>
                  </p>
                ))}
              </ul>

              <h3 className="font-semibold mt-4">INSTRUCTIONS:</h3>

              <p className="text-2xl text-purple-100 mt-4" >
                {selectedPotion.usage.instructions} 
              </p>
              <h3 className="font-semibold mt-4">WARNING:</h3>

              <p className="text-2xl text-purple-100 mt-4" >
                {selectedPotion.usage.restrictions.warnings} 
              </p>

              <h3 className="font-semibold mt-4">CRAFTING TIME:</h3>

              <p className="text-2xl text-purple-100 mt-4" >
                {selectedPotion.crafting.time.amount} {selectedPotion.crafting.time.unit} 
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 font-kaotika text-2xl bg-black border border-yellow-800 rounded-lg shadow">

        <div>
          <label htmlFor="levelFilter" className="block font-medium text-gray-100">
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
          <p className="ext-medievalGold ">Selected Level: {level}</p>
        </div>
        <div>
          <label htmlFor="rarityFilter" className="block font-medium text-gray-100">
            Rarity Filter
          </label>
          <select
            id="rarityFilter"
            value={rarity}
            onChange={(e) => setRarity(e.target.value)}
            className="w-[50%] mt-2 p-2 border rounded text-medievalGold"
          >
            <option value="">All</option>
            <option value="legendary">Legendary</option>
            <option value="epic">Epic</option>
            <option value="mythic">Mythic</option>
          </select>
        </div>
        <div>
          <label htmlFor="effectFilter" className="block  font-medium text-gray-100">
            Effect Filter
          </label>
          <input
            type="text"
            id="effectFilter"
            placeholder="Type the desired effect here..."
            value={effect}
            onChange={(e) => setEffect(e.target.value)}
            className="w-[80%] mt-2 p-2 border rounded text-medievalGold"
          />
        </div>

        <button
          className="bg-medievalGold text-white py-2 px-4 rounded hover:bg-gray-800 m-4 "
          onClick={calculateTime}
        >
          Calculate Crafting Time
        </button>

        <div>
          {craftTime !== null && (
            <p className="mt-4 text-3xl text-gray-100">Total Crafting Time: {craftTime} minutes</p>
          )}
        </div>

        <button
          className="bg-medievalGold text-white py-2 px-4 rounded hover:bg-gray-800 m-4"
          onClick={applyFilters}
        >
          Apply Filters
        </button>

      </div>
    </div>
  );
};

export default PotionFilters;