import { useState, useContext, useRef } from "react";
import ItemsContext from "../features/ItemsContext";
import itemService from "../services/itemService";
import LoadingSpinner from "../loadingComponents/LoadingSpinner";

function AddItemForm({ onClose }) {
  const { items, setItems } = useContext(ItemsContext);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    e.preventDefault();
    itemService
      .createItem(itemObject)
      .then((res) => {
        setItems(items.concat(res));
        setName("");
        setPrice("");
        setQuantity("");
        fileInputRef.current.value = null;
      })
      .catch((error) => console.log(error))
      .finally(() => {
        onClose();
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-10 ">
        <LoadingSpinner />
      </div>
    );
  }

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
      <button className="bg-secondary hover:bg-green" type="submit">
        Add New Item
      </button>
    </form>
  );
}

export default AddItemForm;
