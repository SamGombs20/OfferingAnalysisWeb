'use client'
import { useAuthStore } from "../lib/store";

const DashboardPage=()=>{
    const {user} = useAuthStore()
    return(
        <div>
            <p>Welcome {user?.firstName}</p>
        </div>
    );
}
export default DashboardPage;