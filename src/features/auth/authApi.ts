import api from "../../services/api";

export const loginUser = async (data: {
  username: string;
  password: string;
}) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};