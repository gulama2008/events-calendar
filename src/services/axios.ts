import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://event-calendar-siyu-a56d0bf76045.herokuapp.com",
  timeout: 10000,
});

export default instance;
