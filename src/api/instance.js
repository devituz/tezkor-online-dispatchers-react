import axios from "axios";

const instance = axios.create({
  baseURL: "https://tezkor-online.uz/api/dispatchers",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
