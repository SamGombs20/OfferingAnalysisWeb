import { User, UserLogIn } from "../types/global"

type AuthState ={
    user:User,
    loading:boolean,
    logIn:(userIn:UserLogIn)=>User,
    logOut:()=>void
}
