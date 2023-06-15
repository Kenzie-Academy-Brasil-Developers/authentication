import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { useUserContext } from "../../providers/UserContext";

export const LoginPage = () => {
   const { userLogin } = useUserContext();

   const { register, handleSubmit } = useForm();

   const submit = async (formData) => {
      userLogin(formData);
   };

   return (
      <>
         <Header />
         <main>
            <h1>Faça login</h1>
            <form onSubmit={handleSubmit(submit)}>
               <label>
                  E-mail
                  <input type="text" {...register("email")} />
               </label>
               <label>
                  Senha
                  <input type="text" {...register("password")} />
               </label>
               <button type="submit">Login</button>
            </form>
         </main>
      </>
   );
};
