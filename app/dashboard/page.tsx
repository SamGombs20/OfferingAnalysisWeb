'use client'
import { useAuthStore } from "../lib/store";

const DashboardPage=()=>{
    const {user} = useAuthStore()

    return(
        <div>
            <div className="flex font-bold text-4xl pt-6">
                <p className="blue-txt">Offering</p>
                <p className="red-txt">Analysis</p>
            </div>
            <p>Welcome {user?.firstName}</p>
        </div>
    );
}
export default DashboardPage;