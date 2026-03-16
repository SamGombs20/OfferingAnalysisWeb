import { ReactNode } from "react";
import Sidebar from "../components/sidebar";

const DashboardLayout =({children}:{children:ReactNode})=>{
    return(
        <div className="flex min-h-screen">
            <Sidebar/>
            <main className="flex-1 transition-all duration-300 ease-in-out">
                {children}
            </main>
        </div>
    )
}
export default DashboardLayout;