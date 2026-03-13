import { create } from "zustand"
import { User, UserLogIn } from "../types/global"
import { persist } from "zustand/middleware"

type AuthState ={
    user:User|null,
    loading:boolean,
    logIn:(userIn:User)=>void,
    logOut:()=>void
}
export const useAuthStore = create<AuthState>()(
    persist(
        (set)=>({
            user:null,
            loading:false,
            logIn:(user:User)=>{
                set({user})
                console.log(user)

            },
            logOut:()=>set({user:null})
        }),
        {name:'auth-storage'}
    )
)