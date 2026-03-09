'use client'

import { useForm } from "react-hook-form";
import { UserRegister } from "../types/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRegisterSchema } from "../schemas/user";
import { registerUser } from "../actions/auth";
import { useState } from "react";

export const RegistrationForm =()=>{
    const{register,handleSubmit,formState:{errors}} = useForm<UserRegister>({
        resolver:zodResolver(UserRegisterSchema)
    })
    const [apiError, setApiError] = useState("")
    const onSubmit = async (data:UserRegister)=>{
        try{
            setApiError("")
            await registerUser(data)
        }
        catch(err:any){
            setApiError(err.message)
        }
    }
    return (
        <div className="flex flex-col mt-8 w-full min-h-96 p-4 rounded-xl shadow-xl border-t border-blue-700 pb-8">
            
            <div className="text-center mb-8 mt-4">
                <p className="mb-1 text-2xl font-semibold">Sign Up</p>
                <p className="italic">Create an account and start making analysis</p>
            </div>
            <form className="flex w-full flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <div className="input-div">
                        <input type="text" {...register('firstName')} placeholder="First name" className="user-input"/>
                        {errors.firstName && <p className="error-txt">{errors.firstName.message}</p>}
                    </div>
                    <div className="input-div">
                        <input type="text" {...register('lastName')} placeholder="Last name" className="user-input" />
                        {errors.lastName && <p className="error-txt">{errors.lastName.message}</p>}
                    </div>
                    <div className="input-div">
                        <input type="text" {...register('church')} placeholder="Church name" className="user-input"/>
                        {errors.church && <p className="error-txt">{errors.church.message}</p>}
                    </div>
                    <div className="input-div">
                        <input type="text" {...register('phoneNumber')} placeholder="Phone number" className="user-input"/>
                        {errors.phoneNumber && <p className="error-txt">{errors.phoneNumber.message}</p>}
                    </div>
                    <div className="input-div">
                        <input type="email" {...register('email')} placeholder="Email" className="user-input"/>
                        {errors.email && <p className="error-txt">{errors.email.message}</p>}
                    </div>
                    <div className="input-div">
                        <input type="text" {...register('username')} placeholder="Username" className="user-input"/>
                        {errors.username && <p className="error-txt">{errors.username.message}</p>}
                    </div>
                    <div className="input-div">
                        <input type="password" {...register('password')} placeholder="Password" className="user-input"/>
                        {errors.password && <p className="error-txt">{errors.password.message}</p>}
                    </div>
                    <div className="input-div">
                        <input type="password" placeholder="Confirm Password" className="user-input" /> 
                    </div>
                    {apiError && <p className="error-txt text-center mt-6">{apiError}</p>}
                    <button type="submit" className="custom-btn w-5/6 mx-auto mt-4">Register</button>
                </div>
            </form>
        </div>
    );
}