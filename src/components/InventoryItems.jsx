import { useEffect, useContext, useState } from "react";
import ItemContext from "../features/ItemContext";
import itemService from "../services/itemService";
import SellModal from "./SellModal";
function InventoryItems() {
  // const { items, setItems } = useContext(ItemContext);
  const [items, setItems] = useState([]);
  const [showSell, setShowSell] = useState(false);
  const handleClose = () => setShowSell(false);

  useEffect(() => {
    itemService
      .getItems()
      .then((res) => {
        setItems(res);
      })
      .catch((err) => console.log(err));
  });

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
                className="bg-secondary w-16 rounded-lg cursor-pointer"
                onClick={() => setShowSell(true)}
              >
                Sell
              </button>
              <button className="bg-red  w-16 rounded-lg cursor-pointer">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <SellModal visible={showSell} onClose={handleClose} />
    </div>
  );
}

export default InventoryItems;
