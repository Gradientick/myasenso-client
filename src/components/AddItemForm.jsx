import { useState, useContext } from "react";
import itemService from "../services/itemService";
// import ItemContext from "../features/ItemContext";
function AddItemForm({ image , name , price , quantity , setImage , setName ,setPrice , setQuantity}) {
  // const { items, setItems } = useContext(ItemContext);


  const addItem = (e) => {
    e.preventDefault();
    itemService
      .createItem({ image, name, price, quantity })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));

    const newItemData = new FormData();
    newItemData.append("image", image);
    newItemData.append("name", name);
    newItemData.append("price", price);
    newItemData.append("quantity", quantity);

    itemService
      .createItem(newItemData)
      .then((res) => {
        console.log("response:", res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setImage("");
        setName("");
        setPrice("");
        setQuantity("");
        onclose();
      });
  };
  return (
    <form className="flex justify-evenly modal" onSubmit={addItem}>
      <label htmlFor="file">Item Image:</label>
      <input
        type="file"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label htmlFor="text">Item Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="number">Price:</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label>Quantity:</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button className="bg-secondary hover:bg-green" onClick={addItem}>
        Add New Item
      </button>
    </form>
  );
}

export default AddItemForm;
