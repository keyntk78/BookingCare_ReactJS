import { stringify } from "react-auth-wrapper/helpers";
import axios from "../axios";

const handleLoginAPI = (email, password) => {
  return axios.post("/api/login", { email, password });
};

export { handleLoginAPI };
