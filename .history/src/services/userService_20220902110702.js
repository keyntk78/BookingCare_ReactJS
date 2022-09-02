import axios from "../axios";

const handleLoginAPI = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUser = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`, { id: inputId });
};

const createNewUser = (data) => {
  console.log("check data from service:", data);
  return axios.post(`/api/create-new-user`, data);
};

export { handleLoginAPI, getAllUser, createNewUser };
