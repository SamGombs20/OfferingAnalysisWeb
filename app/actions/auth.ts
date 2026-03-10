'use server'

import { registerUserApi } from "../api/auth"
import { UserRegister, UserRegisterAPI } from "../types/global"



export const registerUser = async(user:UserRegister)=>{
   const newUser:UserRegisterAPI = {
    firstName:user.firstName,
    lastName:user.lastName,
    church:user.church,
    phoneNumber:user.phoneNumber,
    email:user.email,
    username:user.username,
    password:user.password,
    role:"user"
   }
   return await registerUserApi(newUser)
}