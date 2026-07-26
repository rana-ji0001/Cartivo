import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL;


const api = axios.create({
    baseURL:`${API_URL}/api`,
    withCredentials:true
});


export const getAllProducts = async() => {
    try {
        const response = await api.get("/products",{
        });
        return response.data;
    } catch (error) {
        console.log(error || "error");
        
    }
}
export const createProduct = async(formdata) => {
    try {
        const response = await api.post("/products",formdata,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    });
        return response.data;
    } catch (error) {
        console.log(error || "error");
        
    }
}

export const udpateProduct = async(productId, productData) => {
    try {
        const response = await api.put(`/products/${productId}`, productData,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    })
        return response.data;
    } catch (error) {
        console.log(error || "error")
    }
}

export const deleteProduct = async(productId) => {
    try {
        const response = await api.delete(`/products/${productId}`);
        return response.data;
    }catch(error){
        console.log(error || "error");
    }
}

export const getProductById = async(productId) => {
    try {
        const response = await api.get(`/products/${productId}`);
        return response.data;
    } catch (error) {
        console.log(error || "error");
        
    }
}