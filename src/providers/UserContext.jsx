import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const navigate = useNavigate();

   useEffect(() => {
      const loadUser = async () => {
         const token = localStorage.getItem("@TOKEN");
         const userId = localStorage.getItem("@USERID");

         if (token && userId) {
            try {
               const { data } = await api.get(`/users/${userId}`, {
                  headers: {
                     Authorization: `Bearer ${token}`,
                  },
               });
               setUser(data);
               navigate("/dashboard");
            } catch (error) {
               console.log(error);
               localStorage.removeItem("@TOKEN");
               localStorage.removeItem("@USERID");
            }
         }
      };
      loadUser();
   }, []);   

   const userRegister = async (formData) => {
      try {
         await api.post("/users", formData);
         console.log("Cadastro efetuado com sucesso!");
         navigate("/");
      } catch (error) {
         console.log(error);
      }
   };

   const userLogin = async (formData) => {
      try {
         const { data } = await api.post("/login", formData);
         localStorage.setItem("@TOKEN", data.accessToken);
         localStorage.setItem("@USERID", data.user.id);
         setUser(data.user);
         navigate("/dashboard");
      } catch {
         console.log(error);
      }
   };

   const userLogout = () => {
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USERID");
      setUser(null);
      navigate("/");
   };

   return (
      <UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
         {children}
      </UserContext.Provider>
   );
};

export const useUserContext = () => useContext(UserContext);
