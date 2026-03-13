'use client'
import { useAuthStore } from "../lib/store";

const DashboardPage=()=>{
    const {user, logOut} = useAuthStore()
    return(
        <div>
            <p>Welcome {user?.firstName}</p>
            <button onClick={logOut}>LogOut</button>
        </div>
    );
}
export default DashboardPage;