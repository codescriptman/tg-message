import { getAxiosInstance } from "../axios/axios.js";

export const sendMessage = (data: string) => {
  getAxiosInstance(data);
};
