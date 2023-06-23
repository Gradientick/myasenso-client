const baseUrl = "http://localhost:5000/api/items";
import axios from "axios";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

function getItems() {
  return axios.get(baseUrl).then((res) => res.data);
}

function createItem(item) {
  const config = {
    Headers: { Authorization: token },
  };
  return axios.post(baseUrl, item, config).then((res) => res.data);
}

function deleteItem(id) {
  return axios.delete(`${baseUrl}/${id}`).then((res) => res.status);
}

export default {
  getItems,
  createItem,
  deleteItem,
  setToken,
};
