import axios from "axios";

export const register = async (data) => {
  await axios.post("http://localhost:3000/register", data);
};

export const login = async (data) => {
  await axios.post("http://localhost:3000/login", data);
};
