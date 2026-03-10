'use client'
import { useState } from "react";
import { LogInForm } from "../components/login_form";
import { RegistrationForm } from "../components/registration_form"

const AuthPage =()=>{
    const[isLogin, setIsLogin] = useState(false)

    const toggleForm = ()=>{
        setIsLogin(!isLogin)
    }
    return (
        <div className="container w-xl mx-auto min-h-screen items-center flex flex-col justify-center">
            <div className="text-4xl font-bold flex">
                <p className="blue-txt">Offering</p>
                <p className="red-txt">Analysis</p>
            </div>
            <div className="flex flex-col mt-8 w-full min-h-96 p-4 rounded-xl shadow-xl border-t border-blue-700 pb-8">
                {isLogin ? <LogInForm/>:<RegistrationForm/>}
            </div>
            <div className="mt-8">
                {isLogin? (<div className="flex gap-1 items-center">
                    <p>Don't have an account?</p>
                    <button onClick={toggleForm} className="toggle-btn">Register</button>
                </div>):(<div className="flex gap-1 items-center">
                    <p>Already have an account?</p>
                    <button onClick={toggleForm} className="toggle-btn">Sign in</button>
                </div>)}
            </div>
        </div>
    )
}
export default AuthPage;