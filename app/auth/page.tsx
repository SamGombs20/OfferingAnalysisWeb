import { RegistrationForm } from "../components/registration_form"

const AuthPage =()=>{
    return (
        <div className="container w-1/2 mx-auto min-h-screen items-center flex flex-col justify-center">
            <div>
                <p className="text-4xl font-bold blue-txt">Offering Analysis</p>
            </div>
            <RegistrationForm/>
        </div>
    )
}
export default AuthPage;