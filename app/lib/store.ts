import { create } from "zustand"
import { User, UserLogIn } from "../types/global"
import { persist } from "zustand/middleware"
import { loginUser } from "../actions/auth"

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
            logIn:(userIn:User)=>{
                set({user:userIn})

            },
            logOut:()=>set({user:null})
        }),
        {name:'auth-storage'}
    )
)