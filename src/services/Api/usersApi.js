import axios from "axios";

const instance = axios.create({
  baseURL: "https://6458c3e88badff578efa290e.mockapi.io",
});

export const fetchUsers = async () => {
  const { data } = await instance.get("/users");
  return data;
};
