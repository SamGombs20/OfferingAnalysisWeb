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