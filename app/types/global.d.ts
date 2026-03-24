import * as z from 'zod';
import { UserLoginSchema, UserRegisterApiSchema, UserRegisterSchema, UserSchema } from '../schemas/user';
import { WeeklyCollectionSchema } from '../schemas/collections';


type User = z.infer<typeof UserSchema>
type UserLogIn = z.infer<typeof UserLoginSchema>
type UserRegister = z.infer<typeof UserRegisterSchema>

type UserRegisterAPI = z.infer<typeof UserRegisterApiSchema>

type WeeklyCollection = z.infer<typeof WeeklyCollectionSchema>

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
