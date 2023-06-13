import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";

export const LoginPage = () => {
   const { register, handleSubmit, reset } = useForm();

   const submit = async (formData) => {
      console.log(formData);
      reset();
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
            </form>
         </main>
      </>
   );
};