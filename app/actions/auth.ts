'use server'

import { redirect } from "next/navigation"
import {  getAuthenticatedUser, loginUserApi, registerUserApi } from "../api/auth"
import { User, UserLogIn, UserRegister, UserRegisterAPI } from "../types/global"
import { cookies } from "next/headers"
import { refresh } from "next/cache"



export const registerUser = async(user:UserRegister):Promise<User>=>{
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
export const loginUser = async(user:UserLogIn):Promise<User>=>{
    await loginUserApi(user)
    const authenticatedUser =await getAuthenticatedUser()
    return authenticatedUser
}
export const logOutUser=async()=>{
    const allCookies = (await cookies()).getAll()

    for (const cookie of allCookies){
        (await cookies()).delete(cookie.name)
    }
    redirect('/auth')
}
