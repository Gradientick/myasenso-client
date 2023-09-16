import { useState, useContext } from "react";
import AddItemModal from "./AddItemModal";
import PriceContext from "../features/PriceContext";
function InventoryHeading() {
  const [showModal, setShowModal] = useState(false);
  const { setPrice } = useContext(PriceContext);

  const handleOnClose = () => setShowModal(false);

  const clearEarnings = () => {
    setPrice([0]);
  };

  return (
    <div className="h-11 bg-secondary flex items-center justify-between px-5">
      <h1 className="text-2xl">Inventory</h1>
      <div className="flex items-center gap-2">
        <button
          onClick={() => clearEarnings()}
          className="bg-red text-white text-sm p-1 rounded-md hover:bg-darkred md:px-3 py-2"
        >
          Clear Earnings
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue text-white text-sm p-1 rounded-md hover:bg-sky-700 md:px-3 py-2"
        >
          Add Item
        </button>
      </div>
      <AddItemModal visible={showModal} onClose={handleOnClose} />
    </div>
  );
}

export default InventoryHeading;
