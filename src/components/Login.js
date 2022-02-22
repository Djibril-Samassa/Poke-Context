import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


export default function Login(){

    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data =>{
        // Aller vers Home
            history.push("/")
    };


    return(
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" required maxLength={15} {...register("username")}/>
                {errors.username && <span>Please ente a username</span>}
                <input type="password" required minLength={6} {...register("password")}/>
                {errors.password && <span>Please ente a password</span>}
                <button type="submit">envoyer</button>
            </form>
    )  
}