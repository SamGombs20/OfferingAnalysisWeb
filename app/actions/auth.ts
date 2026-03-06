'use server'

import { UserRegisterSchema } from "../schemas/user"

export const registerUser = async(initialState:any,formData:FormData)=>{
    const validatedFields = UserRegisterSchema.safeParse(
        {
           firstName:formData.get("firstName"),
           lastName:formData.get("lastName"),
           church:formData.get("church"),
           phoneNumber:formData.get("phoneNumber"),
           email:formData.get("email"),
           username:formData.get("username"),
           password:formData.get("password"),
        }
    )
    if(!validatedFields.success){
        console.log(validatedFields.error.flatten().fieldErrors)
    }
}