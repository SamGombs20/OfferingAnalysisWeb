import { create } from "zustand"
import { User, UserLogIn } from "../types/global"

type AuthState ={
    user:User|null,
    loading:boolean,
    logIn:(userIn:User)=>void,
    logOut:()=>void
}
export const useAuthStore = create<AuthState>((set)=>({
    user:null,
    loading:false,
    logIn(userIn) {
        
        set({user:userIn})
        console.log('called here')
    },
    logOut() {
        set({user:null})
    },
}))