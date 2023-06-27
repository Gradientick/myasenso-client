import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

function setToken(token) {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

async function getItems() {
  const response = await apiClient.get("/items");
  return response.data;
}

async function getItem(id) {
  const response = await apiClient.get(`/items/${id}`);
  return response.data;
}

async function createItem(item) {
  const response = await apiClient.post("/items", item);
  return response.data;
}

async function updateItem(id, item) {
  const response = await apiClient.put(`/items/${id}`, item);
  return response.data;
}

async function deleteItem(id) {
  const response = await apiClient.delete(`/items/${id}`);
  return response.status;
}

export default {
  setToken,
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
