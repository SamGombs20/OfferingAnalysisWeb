import { RegistrationForm } from "../components/registration_form"

const AuthPage =()=>{
    return (
        <div className="container w-1/2 mx-auto min-h-screen items-center flex flex-col justify-center">
            <div className="text-4xl font-bold flex">
                <p className="blue-txt">Offering</p>
                <p className="red-txt">Analysis</p>
            </div>
            <RegistrationForm/>
        </div>
    )
}
export default AuthPage;