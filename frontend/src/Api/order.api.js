import axios from "axios";


const api = axios.create({
    baseURL:'http://localhost:3000/api/orders',
    withCredentials:true
});


export const createOrderInDb = async(formData) => {
    try {
        const response = await api.post("/",{formData})
    } catch (error) {
        
    }
} 