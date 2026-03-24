import * as z from 'zod';
import { UserLoginSchema, UserRegisterApiSchema, UserRegisterSchema, UserSchema } from '../schemas/user';


type User = z.infer<typeof UserSchema>
type UserLogIn = z.infer<typeof UserLoginSchema>
type UserRegister = z.infer<typeof UserRegisterSchema>

type UserRegisterAPI = z.infer<typeof UserRegisterApiSchema>

type Token ={
    accessToken:string,
    refreshToken:string,
    tokenType:string
}
type DailySummary={
    week:number,
    date:string,
    attendance:number,
    offerings:number
}
type weeklySummary ={
    date:string,
    cash:number,
    bank:number,
    adults:number,
    children:number,
    visitors:number
}
type collectionInput ={
    tithes:string,
    offerings:string,
    sundaySchool:string,
    building:string,
    evangelism:string,
    others:string,
    cashCollections:string,
    bankCollections:string,
    adults:string,
    childrean:string,
    visitors:string,
    newConverts:string,
    date:string
}