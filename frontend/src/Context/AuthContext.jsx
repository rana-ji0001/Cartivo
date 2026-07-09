import { createContext, useState } from "react";
import React from "react";

export const Authcontext = createContext();


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState("");
    
    return(
        <Authcontext.Provider value={{user, setUser}}>
            {children}

        </Authcontext.Provider>
    )
}