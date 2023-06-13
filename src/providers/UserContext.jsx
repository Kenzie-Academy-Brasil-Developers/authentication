import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    cosnt [user, setUser] = useState({})

    const navigate = useNavigate();

    const userRegister = async (formData) => {
        try {
            await api.post('/users', formData);
            console.log("Cadastro efetuado com sucesso!");
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    const userLogin = async (formData) => {
  
    }

    const userLogout = () => {

    }  

    return(
        <UserContext.Provider value={{user, userRegister, userLogin, userLogout}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);