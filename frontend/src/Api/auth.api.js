import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL;


const api = axios.create({
    baseURL:`${API_URL}/api`,
    withCredentials:true
});

export async function register({username, email, password}) {
    try {
        const response = await api.post("/auth/register", {
            username, email, password
        });
        return response.data;
    } catch (error) {
        console.log(error || "error");
    }
    
}

export async function login({email, password}) {
    try {
        const response = await api.post("/auth/login", {
            email, password
        });
        return response.data;
    } catch (error) {
        console.log(error || "error")
        
    }
}

export async function logout() {
    try {
        const response = await api.get("/auth/logout",{});
        return response.data;
    } catch (error) {
        console.log(error || "error");
    }
    
}

export async function getMe() {
    try {
        const response = await api.get("/auth/get-me",{
        });
        return response.data;
    } catch (error) {
        console.log(error || "error");
    }
    
}

export async function verifyEmail({otp, email}) {
    try {
        const response = await api.post("/auth/verify-email",{otp, email});
        return response.data;
    } catch (error) {
        console.log(error.message || "error")
    }
    
}

export async function getUsers(){
    try{
        const response = await api.get("/auth/users");
        return response.data;
    }catch(error){
        console.log("this is getUsers " + error.message)
    }
}
