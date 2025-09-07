import axios from "axios";

const MY_TOKEN = "8484914016:AAHRjmYK_XavfRwnwLBv_YKidxnkToAlVJw";

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

function getAxiosInstance() {
  axios.post(BASE_URL);
}
