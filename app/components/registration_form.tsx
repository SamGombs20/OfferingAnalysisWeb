'use client'

import { useForm } from "react-hook-form";
import { UserRegister } from "../types/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRegisterSchema } from "../schemas/user";

export const RegistrationForm =()=>{
    const{register,handleSubmit,formState:{errors}} = useForm<UserRegister>({
        resolver:zodResolver(UserRegisterSchema)
    })
    const onSubmit = (data:UserRegister)=>{
        console.log(data)
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
                        <input type="text" placeholder="First name" className="user-input"/>
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                    </div>
                    <div className="input-div">
                        <input type="text" placeholder="Last name" name="lastName" className="user-input" />
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </div>
                    <div className="input-div">
                        <input type="text" placeholder="Church name" name="church" className="user-input"/>
                        {errors.church && <p>{errors.church.message}</p>}
                    </div>
                    <div className="input-div">
                        <input type="text" name="phoneNumber" placeholder="Phone number" className="user-input"/>
                        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                    </div>
                    <div className="input-div">
                        <input type="email" name="email" placeholder="Email" className="user-input"/>
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className="input-div">
                        <input type="text" name="username" placeholder="Username" className="user-input"/>
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>
                    <div className="input-div">
                        <input type="password" placeholder="Password" name="password" className="user-input"/>
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <div className="input-div">
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="user-input" /> 
                    </div>
                    <button type="submit" className="custom-btn w-5/6 mx-auto mt-8">Register</button>
                </div>
            </form>
        </div>
    );
}