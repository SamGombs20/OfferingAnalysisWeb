import {z} from 'zod';

export const UserSchema = z.object({
    id:z.string(),
    firstName:z.string().trim().min(2, "First name must be at least 2 characters!"),
    lastName:z.string().trim().min(2, "Last name must be a t least 2 characters!"),
    church:z.string().trim().min(2, "Church name must be at least 2 characters!"),
    phoneNumber:z.string().trim().length(10, "Phone number must be 10 characters long").regex(/^\d{10}$/, "Phone number must contain only digits!"),
    email:z.string().email().toLowerCase(),
    username:z.string().trim().min(4, "Username must be at least 4 characters!"),
    role:z.string(),
})

export const UserLoginSchema = z.object({
    username:z.string().trim().min(4, "Username must be at least 4 characters!"),
    password:z.string().min(6, "Password mut be at least 6 characters!")
})

export const UserRegisterSchema = UserSchema.omit({id:true}).extend({
    password:z.string().min(6, "Password must be at least 6 characters!"),
})