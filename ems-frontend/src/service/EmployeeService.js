import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/employees/getAllEmployees";

export const listEmployees = () => {
  return axios.get(API_URL);
};
