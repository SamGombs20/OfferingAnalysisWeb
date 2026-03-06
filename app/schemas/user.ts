import {z} from 'zod';

export const UserSchema = z.object({
    id:z.string(),
    firstName:z.string().min(2),
    lastName:z.string().min(2),
    church:z.string().min(2),
    phoneNumber:z.string().min(10),
    email:z.email(),
    username:z.string().min(4),
    role:z.string().default("user"),
})

export const UserLoginSchema = z.object({
    username:z.string().min(4),
    password:z.string().min(6)
})

export const UserRegisterSchema = UserSchema.omit({})