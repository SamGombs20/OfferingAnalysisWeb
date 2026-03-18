import { ReactNode } from "react";
import Sidebar from "../components/sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div className="lg:bg-gray-200 lg:flex">
        <Sidebar/>
      </div>
      <main className={`lg:ml-1 lg:pl-10 transition-all duration-300 ease-in-out  px-3 pt-15`}>
        <div className="flex font-bold text-sm ">
                <p className="blue-txt">Offering</p>
                <p className="red-txt">Analysis</p>
            </div>
        {children}
      </main>
    </div>
  );
};
export default DashboardLayout;
