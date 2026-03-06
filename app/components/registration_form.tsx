export const RegistrationForm =()=>{
    return (
        <div className="flex flex-col mt-8 w-full min-h-96 p-4 rounded-xl shadow-xl border-t border-blue-700">
            
            <div className="text-center">
                <p className="mb-1 text-2xl font-semibold">Sign Up</p>
                <p className="italic">Create an account and start making analysis</p>
            </div>
            <form>
                <div className="flex flex-col">
                    <input type="text" placeholder="First name" className="user-input"/>
                    <input type="text" placeholder="Last name" name="lastName" className="user-input" />
                    <input type="text" placeholder="Church name" name="church" className="user-input"/>
                    <input type="number" name="phoneNumber" placeholder="Phone number" className="user-input"/>
                    <input type="email" name="email" placeholder="Email" className="user-input"/>
                    <input type="text" name="username" placeholder="Username" className="user-input"/>
                    <input type="text" placeholder="Password" name="password" className="user-input"/>                     
                </div>
            </form>
        </div>
    );
}