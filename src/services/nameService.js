import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
});

function setToken(token) {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

async function getName() {
  const response = await apiClient.get("/users");
  const name = await response.data.name;
  return name;
}

export default {
  setToken,
  getName,
};
