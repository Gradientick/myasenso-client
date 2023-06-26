import { useEffect, useContext, useState } from "react";
import ItemContext from "../features/ItemContext";
import itemService from "../services/itemService";

function InventoryItems() {
  // const { items, setItems } = useContext(ItemContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    itemService
      .getItems()
      .then((res) => {
        setItems(res);
      })
      .catch((err) => console.log(err));
  });

  // let items = [
  //   {
  //     name: "Sword",
  //     image: "https://i.imgur.com/HqKq8XK.png",
  //     price: "100",
  //     id: 1,
  //     quantity: "3",
  //   },
  //   {
  //     name: "Sword",
  //     image: "https://i.imgur.com/HqKq8XK.png",
  //     price: "100",
  //     id: 2,
  //     quantity: "3",
  //   },
  //   {
  //     name: "Sword",
  //     image: "https://i.imgur.com/HqKq8XK.png",
  //     price: "100",
  //     id: 3,
  //     quantity: "3",
  //   },
  //   {
  //     name: "Sword",
  //     image: "https://i.imgur.com/HqKq8XK.png",
  //     price: "100",
  //     id: 4,
  //     quantity: "3",
  //   },
  //   {
  //     name: "Sword",
  //     image: "https://i.imgur.com/HqKq8XK.png",
  //     price: "100",
  //     id: 5,
  //     quantity: "3",
  //   },
  // ];
  return (
    <div className="bg-darkgreen grid ">
      <ul className="grid grid-cols-6 gap-3 p-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex-column p-3 bg-primary gap-3 rounded-lg"
          >
            <img src={item.image} alt="" className="w-52" />
            <p className="text-lg">{item.name}</p>
            <p>Quantity: {item.quantity}</p>
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
