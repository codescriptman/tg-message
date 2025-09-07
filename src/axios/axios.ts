import axios from "axios";

const MY_TOKEN = "8484914016:AAHRjmYK_XavfRwnwLBv_YKidxnkToAlVJw";

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}/sendMessage`;
const CHAT_ID = "1739574011";

export function getAxiosInstance(data: string) {
  const options = {
    method: "POST",
    url: BASE_URL,
    params: { "": "" },
    headers: { "Content-Type": "application/json" },
    data: {
      chat_id: CHAT_ID,
      text: data,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
