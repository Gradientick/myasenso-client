import { useEffect, useContext } from "react";
import ItemsContext from "../features/ItemsContext";
import itemService from "../services/itemService";
import PriceContext from "../features/PriceContext";

function InventoryItems() {
  const { items, setItems } = useContext(ItemsContext);
  const { price, setPrice } = useContext(PriceContext);
  // // let newNumber = 0;

  useEffect(() => {
    itemService
      .getItems()
      .then((res) => setItems(res))
      .catch((err) => console.log(err));
  }, []);

  const deleteItem = (id) => {
    itemService
      .deleteItem(id)
      .then((_res) => {
        setItems(items.filter((item) => item.id !== id));
      })
      .catch((error) => console.log(error));
  };

  const handleDecreaseQuantity = (id, item) => {
    const newQuantity = item.quantity - 1;
    const itemObject = { quantity: newQuantity };
    let currentQuantity = itemObject.quantity;
    // let itemPrice = item.price;
    if (currentQuantity <= 0) {
      deleteItem(id);
      return;
    }
    itemService
      .updateItem(id, itemObject)
      .then((res) => {
        const updatedItems = items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
        setItems(updatedItems);
      })
      .catch((error) => console.log(error));
  };

  const handleGetPrice = (item) => {
    const priceToAdd = item.price;
    setPrice((prevState) => [...prevState, priceToAdd]);
  };

  return (
    <div className="bg-darkgreen grid ">
      <ul className="grid grid-cols-6 gap-3 p-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex-column p-3 bg-primary gap-3 rounded-lg"
          >
            <img src={item.photoInfo.url} alt="" className="w-52" />
            <p className="text-lg">{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>₱{item.price}</p>
            <div className="flex gap-2 justify-evenly">
              <button
                className="bg-secondary w-1/2 rounded-md cursor-pointer hover:bg-green focus:outline-none sell"
                onClick={() => {
                  handleDecreaseQuantity(item.id, item);
                  handleGetPrice(item);
                }}
              >
                Sell
              </button>
              <button
                className="bg-red  w-1/2 rounded-md cursor-pointer hover:bg-orange-500 remove"
                onClick={() => deleteItem(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryItems;
