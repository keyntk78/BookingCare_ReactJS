import axios from "../axios";

const handleLoginAPI = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUser = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`, { id: inputId });
};

const createNewUserService = (data) => {
  console.log("check data from service:", data);
  return axios.post(`/api/create-new-user`, data);
};

const deleteUserService = (userId) => {
  // return axios.delete(`/api/delete-user`, { id: userId });
  return axios.delete(`/api/delete-user`, {
    data: {
      id: userId,
    },
  });
};

const editUserService = (data) => {
  return axios.put(`/api/edit-user`, data);
  // return axios.put(`/api/edit-user`, {
  //   data: {
  //     data: data,
  //   },
  // });
};

export {
  handleLoginAPI,
  getAllUser,
  createNewUserService,
  deleteUserService,
  editUserService,
};
