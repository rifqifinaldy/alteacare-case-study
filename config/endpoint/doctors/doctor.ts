import { REQUEST } from "@/config/axios/axios.config";

// API Collection for Doctors Modules

export const getDoctors = () => {
  return REQUEST.get("/c9a2b598-9c93-4999-bd04-0194839ef2dc");
};
