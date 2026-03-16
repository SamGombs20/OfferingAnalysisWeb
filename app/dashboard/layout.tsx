import { ReactNode } from "react";
import Sidebar from "../components/sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="lg: transition-all duration-300 ease-in-out border-l border-blue-200 px-3 pt-15">
        {children}
      </main>
    </div>
  );
};
export default DashboardLayout;
