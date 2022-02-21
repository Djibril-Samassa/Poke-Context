import { useForm } from "react-hook-form"


export default function Login(){

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data =>{
        console.log(data)  
    }


    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" required maxLength={15} {...register("username")}/>
                <button type="submit">envoyer</button>
            </form>
        </div>
    )  
}