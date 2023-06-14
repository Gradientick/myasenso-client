import React from "react";

function AddItemForm() {
  return (
    <form className="flex justify-evenly ">
      <label htmlFor="">Item Image</label>
      <input type="file" />
      <label>Item Name:</label>
      <input type="text" />
      <label htmlFor="">Price:</label>
      <input type="number" name="price" />
      <label htmlFor="">Quantity:</label>
      <input type="number" name="quantity" />
      <button className="bg-secondary hover:bg-green">Add New Item</button>
    </form>
  );
}

export default AddItemForm;
