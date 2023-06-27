import { useState, useContext } from "react";
import itemService from "../services/itemService";
// import ItemContext from "../features/ItemContext";
function AddItemForm({ image, name, price, quantity, setQuantity }) {
  // const { items, setItems } = useContext(ItemContext);

  const sellItem = (e) => {};
  return (
    <form className="flex justify-evenly modal" onSubmit={sellItem}>
      <label>{image}</label>
      <label>Item Name: {name}</label>
      <label>Price: {price}</label>
      <label>Quantity:</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button className="bg-secondary hover:bg-green" onClick={sellItem}>
        Sell Item
      </button>
    </form>
  );
}

export default AddItemForm;
