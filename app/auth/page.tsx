import { LogInForm } from "../components/login_form";
import { RegistrationForm } from "../components/registration_form"

const AuthPage =()=>{
    return (
        <div className="container w-xl mx-auto min-h-screen items-center flex flex-col justify-center">
            <div className="text-4xl font-bold flex">
                <p className="blue-txt">Offering</p>
                <p className="red-txt">Analysis</p>
            </div>
            <div className="flex flex-col mt-8 w-full min-h-96 p-4 rounded-xl shadow-xl border-t border-blue-700 pb-8">
                {/* <RegistrationForm/> */}
                <LogInForm/>
            </div>
        </div>
    )
}
export default AuthPage;