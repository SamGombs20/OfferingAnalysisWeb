'use client'
import { useAuthStore } from "../lib/store";

const DashboardPage=()=>{
    const {user, logOut} = useAuthStore()

    return(
        <div className="border-l min-h-screen border-blue-200 px-3">
            <div className="flex font-bold text-4xl pt-6">
                <p className="blue-txt">Offering</p>
                <p className="red-txt">Analysis</p>
            </div>
            <p>Welcome {user?.firstName}</p>
            <button onClick={logOut}>LogOut</button>
        </div>
    );
}
export default DashboardPage;