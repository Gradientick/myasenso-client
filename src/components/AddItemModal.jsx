import React from "react";
import AddItemForm from "./AddItemForm";

function AddItemModal({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
      <div className="bg-primary rounded-lg p-4 h-1/2 w-2/3 sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/3">
        <div className="flex justify-between">
          <h1 className="text-center text-3xl ">Add Product</h1>
          <button
            onClick={onClose}
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-14v" />
            </svg>
          </button>
        </div>
        <AddItemForm onClose />
      </div>
    </div>
  );
}

export default AddItemModal;
