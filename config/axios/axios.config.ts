import axios from "axios";

// Define BASE URL and API VERSION
const BASE_URL = process.env["NEXT_PUBLIC_BASE_URL"];
const API_VERSION = process.env["NEXT_PUBLIC_API_VERSION"];

// AXIOS INSTANCE
export const REQUEST = axios.create({
  baseURL: BASE_URL! + API_VERSION!,
  headers: {
    accept: "application/json",
  },
});
