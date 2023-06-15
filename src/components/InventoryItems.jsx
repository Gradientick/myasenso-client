import { list } from "postcss";
import React from "react";

function InventoryItems({ Items }) {
  console.log(Items);
  return (
    <div className="bg-darkgreen grid ">
      <ul className="grid grid-cols-6 gap-3 p-2">
        {Items.map((item) => (
          <li className="flex-column p-3 bg-primary gap-3 rounded-lg">
            <img src={item.image} alt="" className="w-52" />
            <p className="text-lg">{item.name}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>₱{item.price}</p>
            <div className="flex gap-2 justify-evenly">
              <button className="bg-secondary w-16 rounded-lg">Sell</button>
              <button className="bg-red  w-16 rounded-lg">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryItems;
