import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"
// const BASE_URL = "https://portifoliobackend.pythonanywhere.com/"

const instance = axios.create({
    baseURL:`${BASE_URL}`
});

export default instance