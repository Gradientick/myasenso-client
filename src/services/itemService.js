const baseUrl = "http://localhost:5000/api/items";
import axios from "axios";
function getItems() {
  return axios.get(baseUrl).then((res) => res.data);
}

function createItem(item) {
  return axios.post(baseUrl, item).then((res) => res.data);
}

function deleteItem(id) {
  return axios.delete(`${baseUrl}/${id}`).then((res) => res.status);
}

export default {
  getItems,
  createItem,
  deleteItem,
};
