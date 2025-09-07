import axios from "axios";

const MY_TOKEN = "8484914016:AAHRjmYK_XavfRwnwLBv_YKidxnkToAlVJw";

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}/sendMessage`;
const CHAT_ID = "1739574011";

export function getAxiosInstance(data: string) {
  axios.post(BASE_URL, {
    data: {
      chat_id: CHAT_ID,
      text: data,
    },
  });
}
