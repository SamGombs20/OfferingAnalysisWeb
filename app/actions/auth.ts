'use server'

import { redirect } from "next/navigation"
import {  getAuthenticatedUser, loginUserApi, registerUserApi } from "../api/auth"
import { UserLogIn, UserRegister, UserRegisterAPI } from "../types/global"



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
export const loginUser = async(user:UserLogIn)=>{
    await loginUserApi(user)
    await getAuthenticatedUser()
    redirect('/dashboard')
}
