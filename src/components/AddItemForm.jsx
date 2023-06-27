import { useState, useContext, useRef } from "react";
import itemService from "../services/itemService";
// import ItemContext from "../features/ItemContext";
function AddItemForm({ image , name , price , quantity , setImage , setName ,setPrice , setQuantity}) {
  // const { items, setItems } = useContext(ItemContext);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const fileInputRef = useRef(null);


  const itemObject = new FormData();
  itemObject.append("image", image);
  itemObject.append("name", name);
  itemObject.append("price", price);
  itemObject.append("quantity", quantity);
  const addItem = (e) => {
    e.preventDefault();
    itemService
      .createItem(itemObject)
      .then((res) => {
        console.log(res.data);
        setName("");
        setPrice("");
        setQuantity("");
        fileInputRef.current.value = null;
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
        accept="image/*"
        ref={fileInputRef}
        onChange={(e) => setImage(e.target.files[0])}
        className="border-solid border-2 border-secondary rounded-md p-1"
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
