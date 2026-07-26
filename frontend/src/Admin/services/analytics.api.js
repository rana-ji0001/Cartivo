import axios from 'axios';


const api = axios.create({
    baseURL:"http://localhost:3000/api/analytics",
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


