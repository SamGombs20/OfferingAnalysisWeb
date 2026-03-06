import * as z from 'zod';
import { UserLoginSchema, UserRegisterSchema, UserSchema } from '../schemas/user';


type User = z.infer<typeof UserSchema>
type UserLogIn = z.infer<typeof UserLoginSchema>
type UserRegister = z.infer<typeof UserRegisterSchema>