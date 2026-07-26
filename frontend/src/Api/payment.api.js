import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;


const api = axios.create({
    baseURL:`${API_URL}/api/payment`,
    withCredentials:true
});

export const createOrder = async(amount) => {
    try {
        const response = await api.post("/order",{amount});
        return response.data
    } catch (error) {
        console.log("This is createdORder errror which is " + error.message);
    }
} 

export const verifyPayment = async(paymentData) => {
    try {
        const response = await api.post("/verify",{paymentData})
        return response.data;
    } catch (error) {
        console.log("This is verify payment error " + error.message);
    }
}