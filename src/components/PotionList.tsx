import React, { useState } from "react";
import { potions } from "../data/data";
import { Potion } from "../types/Potion";


const PotionList: React.FC = () => {
  const [selectedPotion, setSelectedPotion] = useState<Potion | null>(null);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {potions.map((potion) => (
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
      </div>
    </div>
  );
};

export default PotionList;