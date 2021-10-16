import axios from 'axios';

const api = axios.create({
    baseURL: "https://www.amiiboapi.com/api/",
});

export default api;