import {z} from 'zod';

export const UserSchema = z.object({
    firstName:z.string().min(2),
    lastName:z.string().min(2)
})