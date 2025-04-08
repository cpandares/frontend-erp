import axios from "axios";
import { getEnvs } from "../helpers";

const { VITE_API_URL } = getEnvs();

const apiUrl = axios.create({
    baseURL: VITE_API_URL,
   
})

apiUrl.interceptors.request.use(config => {
    const token = localStorage.getItem('token') || '';
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }else{
        delete config.headers['Authorization'];
    }
    return config;
});



export default apiUrl;