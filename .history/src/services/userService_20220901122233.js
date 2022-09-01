import axios from "../axios";

const handleLoginAPI = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUser = (inputId) => {
  return axios.get("/api/get-all-users", { id: inputId });
};

export { handleLoginAPI, getAllUser };
