export const checkPasswordMatch =(pass:string, confirmPass:string):Boolean=>{
    return pass===confirmPass
}
export const baseOptions ={
    httpOnly:true,
    secure:true,
    sameSite:'strict' as const,
    path:'/'
}
export const accessOptions={
    ...baseOptions,
    maxAge:15*60
}
export const refreshOptions={
    ...baseOptions,
    maxAge:7*24*3600
}