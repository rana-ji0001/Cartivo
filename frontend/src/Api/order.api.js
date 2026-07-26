import axios from "axios";


const api = axios.create({
    baseURL:'http://localhost:3000/api/orders',
    withCredentials:true
});


export const createOrderInDb = async(formData) => {
    try {
        const response = await api.post("/",formData);
        return response.data;
    } catch (error) {
        console.log("this is create orderInDb error" + error.message);
    }
} 

export const getAllOrdersAdmin = async() => {
    try {
        const response = await api.get("/");
        return response.data;
    } catch (error) {
        console.log("This is getordersadmin errror" + error.message);
    }
}

export const getMyOrder = async() => {
    try {
        const response = await api.get("/myOrders");
        return response.data;
    } catch (error) {
        console.log("This is get My order error " + error.message);
    }
}
export const updateOrder = async(id, status) => {
    try {
        const response = await api.put(`/${id}/status`,{
            status
        });
        return response.data;
    } catch (error) {
        console.log("This is updateOrder error "+ error.message);
    }
}