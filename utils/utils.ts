import { cookies } from "next/headers";

export const checkPasswordMatch =(pass:string, confirmPass:string):Boolean=>{
    return pass===confirmPass
}
export const setAuthCookies=async(access:string, refresh:string)=>{
    const isProd = process.env.NODE_ENV==='production';
    const baseOptions={
        httpOnly:true,
        secure:isProd,
        sameSite:"strict" as const,
        path:'/'
    }

    const cookie = await cookies();
    cookie.set('session_token',access,{
        ...baseOptions,
        maxAge:15 *60
    })
    cookie.set('refresh_token',refresh,{
        ...baseOptions,
        maxAge:7 * 24 * 3600
    })
}