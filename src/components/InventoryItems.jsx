import { useEffect, useState, useContext } from "react";
import ItemsContext from "../features/ItemsContext";
import itemService from "../services/itemService";
import PriceContext from "../features/PriceContext";

function InventoryItems() {
  const { items, setItems } = useContext(ItemsContext);
  const { setPrice } = useContext(PriceContext);
  let newNumber = 0;
  useEffect(() => {
    itemService
      .getItems()
      .then((res) => {
        setItems(res);
      })
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

  // const handleSell = (id) => {
  //   itemService.getItem(id).then((res) => {
  //     newNumber = res.price;
  //     setPrice.concat(newNumber);
  //   });
  //   itemService.updateItem(id).then((res) => {
  //     setItems(items.filter((item) => item.id !== id));
  //     console.log(res);
  //   });
  // };
  // const reduceItemQuantity = (id) => {
  //   let newNumber = 0;
  //   itemService.getItem(id).then((res) => {
  //     newNumber = --res.quantity;
  //     console.log(newNumber);
  //   });
  //   itemService.updateItem(id, newNumber).then((res) => {
  //     console.log(res);
  //   });
  // };
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
                // onClick={() => }
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
