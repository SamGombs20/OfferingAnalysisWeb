export const RegistrationForm =()=>{
    return (
        <div className="flex flex-col mt-8 w-full min-h-96 p-4 rounded-xl shadow-xl border-t border-blue-700">
            
            <div className="text-center">
                <p className="mb-1 text-2xl font-semibold">Sign Up</p>
                <p className="italic">Create an account and start making analysis</p>
            </div>
            <form>
                <div className="flex flex-col">
                    <input type="text" placeholder="First name" />
                </div>
            </form>
        </div>
    );
}