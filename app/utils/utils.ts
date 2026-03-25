import { WeeklyCollection } from "../types/global"

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
export const getFieldsForCurrentStep=(step:number):(keyof WeeklyCollection)[]=>{
    
    if(step==0){
        return ['tithes','offerings', 'sundaySchool','building', 'evangelism', 'others', 'cashCollections', 'bankCollections']
    }
    else if(step ==1){
        return ['adults', 'children', 'visitors','newConverts','date']
    }
    return []
}