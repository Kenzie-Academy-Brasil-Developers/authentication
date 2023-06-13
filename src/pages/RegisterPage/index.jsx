import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { useUserContext } from "../../providers/UserContext";

export const RegisterPage = () => {
   const { register, handleSubmit, reset } = useForm();

   const { userRegister } = useUserContext();

   const submit = async (formData) => {
      await userRegister();    
      reset();
   };

   return (
      <>
         <Header />
         <main>
            <h1>Cadastre-se</h1>
            <form onSubmit={handleSubmit(submit)}>
               <label>
                  Nome
                  <input type="text" {...register("name")} />
               </label>
               <label>
                  E-mail
                  <input type="text" {...register("email")} />
               </label>
               <label>
                  Senha
                  <input type="text" {...register("password")} />
               </label>
               <label>
                  Trabalho
                  <input type="text" {...register("job")} />
               </label>
               <button>Enviar</button>
            </form>
         </main>
      </>
   );
};
