import { create } from "zustand"
import { User, UserLogIn, UserRegister } from "../types/global"
import { persist } from "zustand/middleware"
import { loginUser, logOutUser, registerUser } from "../actions/auth"

type AuthState ={
    user:User|null,
    loading:boolean,
    signUp:(user:UserRegister)=>void;
    logIn:(userIn:UserLogIn)=>void,
    logOut:()=>void
}
export const useAuthStore = create<AuthState>()(
    persist(
        (set)=>({
            user:null,
            loading:false,
            signUp:async(user:UserRegister)=>{
               const authUser= await registerUser(user)
               set({user:authUser})
            },
            logIn:async (userIn:UserLogIn)=>{
                const authUser=await loginUser(userIn)
                set({user:authUser})

            },
            logOut:async ()=>{
                await logOutUser()
                set({user:null})
            }
        }),
        {name:'auth-storage'}
    )
)