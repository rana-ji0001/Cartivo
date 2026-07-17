import { login, register, logout, getMe} from "../../Api/auth.api";
import { useState, useEffect, useContext } from "react";
import { Authcontext } from "../../Context/AuthContext";

export const useAuth = () => {
    const context = useContext(Authcontext);
    const {loading, setLoading, user, setUser} = context;


    const handleLogin = async({email, password}) => {
        setLoading(true);
        try {
            const data = await login({email, password});
            setUser(data.user);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }

    }
    const handleRegister = async({username, email, password}) => {
        setLoading(true);
        try{
            const data = await register({username, email, password});
            setUser(data.user);
        } catch (error) {
            console.log(error)

        } finally {

            setLoading(false);
        }
    }
    const handleLogout = async() => {
        setLoading(true);
        try{
            await logout();
            setUser(null)
        } catch (error) {
            console.log(error)

        } finally {

            setLoading(false);
        }
    }
    
    return {handleLogin, handleLogout, handleRegister, user, loading}

}