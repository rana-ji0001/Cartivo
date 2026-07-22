import axios from "axios";


const api = axios.create({
    baseURL:'http://localhost:3000/api/payment',
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