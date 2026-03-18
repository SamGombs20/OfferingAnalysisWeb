"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthStore } from "../lib/store";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    label: "Reports",
    href: "/dashboard/reports",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] =useState(false);
  const { user, logOut } = useAuthStore();
  const pathName = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);
  const mobileViewToggle =()=>{
    setIsOpen(!isOpen)
    setIsCollapsed(false)
  }
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm z-30 lg:hidden" />
      )}
      <aside
        className={`fixed top-50 m-5 bg-white  rounded-2xl shadow-2xl px-3 border-none transform h-100 my-auto transition-all duration-300 ease-in-out lg:translate-x-0 z-50 w-65 ${isCollapsed?"lg:w-20":"lg:w-72"} lg:static lg:inset-auto ${isOpen ? "translate-x-0" : "-translate-x-100"}`}
      >
        <div>
            <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full  hover:bg-blue-200 text-blue-800 transition-all duration-300 ease-in-out"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col mt-6  space-y-1">
          {navItems.map((item) => {
            const isActive = pathName === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-3xl transition-all duration-300 ease-in-out hover:text-red-600 hover:scale-105 ${isActive ? "active-link" : "inactive-link"}`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={item.icon}
                  />
                </svg>
                {!isCollapsed &&(
                    <span className="ml-3">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-30 pointer text-blue-700">
          <Link href="/dashboard/profile" className="flex items-center transition-all duration-300 ease-in-out hover:scale-108 hover:text-red-700 px-3" >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              
              d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z"
              fill="currentColor"
            ></path>
          </svg>
          {!isCollapsed && (
            <p className="ml-3">{user?.firstName + " " + user?.lastName}</p>
          )}
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button
            onClick={logOut}
            className="border text-white bg-red-700 rounded-3xl flex items-center justify-center py-3 hover:text-red-700 hover:cursor-pointer hover:bg-transparent transition-all duration-400 ease-in-out w-full hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5"
              />
            </svg>
           {!isCollapsed && (
            <p className="ml-3"> Log Out</p>
           )}
          </button>
        </div>
      </aside>
      <div className="fixed right-0 top-4 shadow-md bg-blue-700 text-white z-50 mr-3 flex rounded-full p-2 lg:hidden">
        <button className="" onClick={mobileViewToggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </>
  );
};
export default Sidebar;
