import axios from "axios";

export const register = async (data) => {
  await axios.post("http://localhost:3000/api/register", data);
};

export const login = async (data) => {
  await axios.post("http://localhost:3000/api/login", data);
};
