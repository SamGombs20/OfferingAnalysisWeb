import { UserRegisterAPI } from "../types/global";
const authAPI = "http://localhost:8000/auth"

export const registerUserApi = async(user:UserRegisterAPI)=>{
    const res = await fetch(`${authAPI}/register`,{
        method:'POST',
        headers:{
            'Content-Type':'Application/json'
        },
        body:JSON.stringify(user)
    })
    if(res.ok){
        const data = await res.json();
        console.log(data);
    }
    else{
        if(res.status==400){
            throw new Error("User already has an account, sign in instead!")
        }
        else{
            throw new Error("Failed to register user!")
        }
    }
}