import React, { useState } from "react";
import AddItemModal from "./AddItemModal";
import SellModal from "./SellModal";
function InventoryHeading() {
  const [showModal, setShowModal] = useState(false);
  const [showSell, setShowSell] = useState(false);

  const handleOnClose = () => setShowModal(false);
  const handleClose = () => setShowSell(false);

  return (
    <div className="h-11 bg-secondary flex items-center justify-between px-5">
      <h1 className="text-2xl">Inventory</h1>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue text-white px-3 py-1 rounded-md hover:bg-sky-700"
      >
        Add Item
      </button>
      {/* <button
        onClick={() => setShowSell(true)}
        className="bg-blue text-white px-3 py-1 rounded-md hover:bg-sky-700"
      >
        Sell Item
      </button> */}
      <AddItemModal visible={showModal} onClose={handleOnClose} />
    </div>
  );
}

export default InventoryHeading;
