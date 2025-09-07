import { getAxiosInstance } from "../axios/axios.js";

export const sendMessage = (data: object) => {
  getAxiosInstance(data);
};
