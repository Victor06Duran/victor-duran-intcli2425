import { useEffect, useState } from "react";
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

  useEffect(() => {
    let result = potions;
    if (level > 0) result = filterByLevelRequirement(result, level);
    if (rarity) result = getPotionsByRarity(result, rarity);
    if (effect) result = findPotionByEffect(result, effect);
    setFilteredPotions(result);
    setCraftTime(null);
  }, [level, rarity, effect]);

  const resetLowerFilters = (filter: string) => {
    if (filter === "level") {
      setRarity("");
      setEffect("");
    } else if (filter === "rarity") {
      setEffect("");
    }
  };

  const calculateTime = () => {
    setCraftTime(calculateCraftingTime(filteredPotions));
  };

  return (
  <div className="p-4 ">
    <div
      className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border-medievalGold rounded-lg bg-black min-h-[500px] min-w-[1200px] bg-opacity-30 h-[650px] overflow-y-auto">
      {filteredPotions.length > 0 ? (
        filteredPotions.map((potion) => (
          <div
            key={potion.id}
            className="bg-black min-w-[230px] text-white font-kaotika text-2xl p-4 rounded shadow-md flex flex-col items-center bg-opacity-50"
          >
            <img
              src={potion.image}
              alt={potion.name}
              className="w-[90%] h-[60%] object-cover rounded-lg"
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
              className="mt-4 bg-gray-900 text-white py-2 px-4 text-xl rounded hover:bg-yellow-600"
              onClick={() => setSelectedPotion(potion)}
            >
              View Details
            </button>
            </div>
          ))
        ) : (
          <p className="text-center text-7xl font-kaotika text-medievalSepia col-span-full">No potions match your criteria.</p>
        )}

      {selectedPotion && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center font-kaotika text-xl">
          <div className=" bg-black p-6 w-full max-w-3xl border border-yellow-600 rounded-lg shadow bg-opacity-80">
            <div className="font-kaotika  flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h2 className="text-4xl font-bold mb-4 text-medievalGold">
                {selectedPotion.name}
              </h2>
              <button type="button" className="font-kaotika text-yellow-800 font-bold text-4xl z-1 hover:bg-gray-950 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal"
                onClick={() => setSelectedPotion(null)}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>

                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h3 className="text-medievalSepia text-left ">RARITY</h3>
            <p className="text-gray-200 text-right">{selectedPotion.rarity}</p>

              <h3 className="text-medievalSepia text-left ">PRIMARY EFFECTS:</h3>
              <p className="text-gray-200 text-right">
                {selectedPotion.effects.primary.attribute}:{" "}
                {selectedPotion.effects.primary.value} (
                {selectedPotion.effects.primary.duration.amount}{" "}
                {selectedPotion.effects.primary.duration.unit})
              </p>

              <h3 className="text-medievalSepia text-left mt-2">SECONDARY EFFECTS:</h3>
              <ul className="list-disc text-gray-300 text-right">
                {selectedPotion.effects.secondary.map((effect, index) => (
                  <p key={index}>
                    {effect.attribute}: {effect.value} ({effect.duration.amount}{" "}
                    {effect.duration.unit})
                  </p>
                ))}
              </ul>


              <h3 className="text-medievalSepia mt-2 text-left ">INGREDIENTS</h3>
              <ul className="list-disc  text-gray-200 text-right">
                {selectedPotion.ingredients.map((ingredient, index) => (
                  <p key={index}>
                    {ingredient.name} - {ingredient.origin.location} (
                    {ingredient.origin.region})
                  </p>
                ))}
              </ul>
              <h3 className="text-medievalSepia  mt-2 text-left ">LEVEL REQUIRED</h3>

              <p className=" text-purple-100 mt-2 text-right ">
                {selectedPotion.usage.restrictions.levelRequirement}
              </p>
              <h3 className="text-medievalSepia  mt-2 text-left ">CLASS REQUIREMENT</h3>
              <ul className="list-disc  text-gray-200 text-right">
                {selectedPotion.usage.restrictions.classRestrictions.map((classRestrictions, index) => (
                  <p key={index}>
                    {classRestrictions}
                  </p>
                ))}
              </ul>

              <h3 className="text-medievalSepia  mt-2 text-left ">INSTRUCTIONS</h3>

              <ul className="list-disc  text-gray-200 text-right">
                {selectedPotion.usage.instructions.map((instructions, index) => (
                  <p key={index}>
                    {instructions}
                  </p>
                ))}
              </ul>

              <h3 className="text-medievalSepia mt-2 text-left ">WARNING</h3>

              <ul className="list-disc text-gray-200 text-right">
                {selectedPotion.usage.restrictions.warnings.map((warnings, index) => (
                  <p key={index}>
                    {warnings}
                  </p>
                ))}
              </ul>

              <h3 className="text-medievalSepia  mt-2 text-left ">CRAFTING TIME</h3>

              <p className=" text-purple-100 mt-2 text-right" >
                {selectedPotion.crafting.time.amount} {selectedPotion.crafting.time.unit}
              </p>
            </div>
            </div>
          </div>
        )}
      </div>


      <div className="m-3 container mx-auto min-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-2 mb-6 font-kaotika text-2xl bg-black border border-yellow-800 rounded-lg shadow">

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
            onChange={(e) => {
              setLevel(Number(e.target.value));
              resetLowerFilters("level");
            }}
            className="w-[90%] mt-2"
          />
          <p className="text-medievalGold ">Selected Level: {level}</p>
        </div>
        <div>
          <label htmlFor="rarityFilter" className="block font-medium text-gray-100">
            Rarity Filter
          </label>
          <select
            id="rarityFilter"
            value={rarity}
            onChange={(e) => {
              setRarity(e.target.value);
              resetLowerFilters("rarity");
            }}
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


      </div>
    </div>
  );
};

export default PotionFilters;