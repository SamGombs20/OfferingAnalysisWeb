'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthStore } from "../lib/store";

const navItems =[
    {label:'Dashboard', href:'/dashboard', icon:'/dashboard_icon.svg'},
    {label:'Analytics', href:'/dashboard/analytics', icon:'/analytics_icon.svg'}
]
const Sidebar=()=>{
    const [isOpen, setIsOpen] = useState(false)
    const {logOut} =useAuthStore()
    const pathName = usePathname()
    useEffect(()=>{
        setIsOpen(false)
    },[pathName])
    return(
        <aside className={`custom-sidebar m-4 rounded-2xl shadow-2xl px-3 border-none w-60 transform h-100 my-auto transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto ${isOpen?"translate-x-0":"-translate-x-full"}`}>
            

            <nav className="flex flex-col mt-6 px-3 space-y-1">
                {navItems.map((item)=>{
                    const isActive = pathName===item.href
                    return(
                        <Link key={item.href} href={item.href} className={`flex items-center px-4 py-3 rounded-3xl transition-colors ${isActive?"active-link":""}`}>
                            <Image src={item.icon} alt="" width={32} height={32} />
                            {item.label}
                        </Link>
                    )
                })}
            </nav>
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <button onClick={logOut} className="custom-btn w-full">Log Out</button>
            </div>
        </aside>
    );
}
export default Sidebar;