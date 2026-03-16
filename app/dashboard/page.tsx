'use client'
import { useAuthStore } from "../lib/store";

const DashboardPage=()=>{
    const {user, logOut} = useAuthStore()

    return(
        <div className="mt-6">
            <div className="flex font-bold text-3xl">
                <p className="blue-txt">Offering</p>
                <p className="red-txt">Analysis</p>
            </div>
            <p>Welcome {user?.firstName}</p>
            <button onClick={logOut}>LogOut</button>
        </div>
    );
}
export default DashboardPage;