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
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logOut } = useAuthStore();
  const pathName = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm z-30 lg:hidden" />
      )}
      <aside
        className={`fixed top-50 bg-white m-4 rounded-2xl shadow-2xl px-3 border-none transform h-100 my-auto transition-transform duration-300 ease-in-out lg:translate-x-0 z-50 w-60 lg:static lg:inset-auto ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav className="flex flex-col mt-6 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathName === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-3xl transition-colors hover:text-red-600 ${isActive ? "active-link" : "inactive-link"}`}
              >
                <svg
                  className="w-5 h-5 mr-3"
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
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button
            onClick={logOut}
            className="border text-white bg-red-700 rounded-3xl flex items-center px-4 py-3 hover:text-red-700 hover:bg-transparent transition-all duration-400 ease-in-out w-full"
          >
            <svg
              className="w-5 h-5 mr-3"
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
            Log Out
          </button>
        </div>
      </aside>
      <div className="fixed right-0 top-4 shadow-md bg-blue-700 text-white z-50 mr-3 flex rounded-3xl p-2 lg:hidden">
        <button className="" onClick={() => setIsOpen(!isOpen)}>
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
