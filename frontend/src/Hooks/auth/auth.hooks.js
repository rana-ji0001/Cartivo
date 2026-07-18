import { login, register, logout, getMe, verifyEmail} from "../../Api/auth.api";
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
            await register({username, email, password});
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
    const verification = async({otp, email}) => {
        setLoading(true);
        try{
            const data = await verifyEmail({otp, email});
            setUser(data.user);
        } catch (error) {
            console.log(error.message)

        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        const getAndSetUser = async() => {
            try{
                const data = await getMe();
                setUser(data.user);
            }catch(error){
                console.log(`This is Get me user error which is ${error.message}`);
                setUser(null);
            }finally{
                setLoading(false)

            }
        }
        getAndSetUser();
    },[]);
    return {handleLogin, handleLogout, handleRegister, user, loading, verification}

}