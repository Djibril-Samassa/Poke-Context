import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import {UserContext} from "../App";

export default function Login(){
    const {isLogged} = useContext(UserContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const userState = useContext(UserContext)

    const setAuth = () => {
        if(userState.isLogged === true){
            userState.setLogged(false);
            console.log(isLogged);
        }
        else{
            userState.setLogged(true)
            console.log(isLogged);
        }}


    const onSubmit = data =>{
        // Aller vers Home
            setAuth();
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