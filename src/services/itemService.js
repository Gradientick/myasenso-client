import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
});

function setToken(newToken) {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
}

async function getItems() {
  try {
    const response = await apiClient.get("/items");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch items");
  }
}

async function getItem(id) {
  try {
    const response = await apiClient.get(`/items/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch item");
  }
}

async function createItem(item) {
  try {
    const response = await apiClient.post("/items", item);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create item");
  }
}

async function updateItem(id, item) {
  try {
    const response = await apiClient.put(`/items/${id}`, item);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update item");
  }
}

async function deleteItem(id) {
  try {
    const response = await apiClient.delete(`/items/${id}`);
    return response.status;
  } catch (error) {
    throw new Error("Failed to delete item");
  }
}

export default {
  setToken,
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
