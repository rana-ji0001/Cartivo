import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;


const api = axios.create({
    baseURL:`${API_URL}/api/analytics`,
    withCredentials:true
});


export const adminStats = async() => {
    try {
        const response = await api.get("/");
        return response.data;
    } catch (error) {
        console.log("this is analytics error = " + error.message);
    }
}


