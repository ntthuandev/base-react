import axios from "axios";

const  BASE_API = "https://product-api-thuannt.onrender.com"


export const axiosInstance = axios.create({
  baseURL: BASE_API
});

