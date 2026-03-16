'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems =[
    {label:'Dashboard', href:'/dashboard', icon:'/dashboard_icon.svg'},
    {label:'Analytics', href:'/analytics', icon:'/analytics_icon.svg'}
]
const Sidebar=()=>{
    const [isOpen, setIsOpen] = useState(false)
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
                        <Link key={item.href} href={item.href}>
                            {item.label}
                        </Link>
                    )
                })}
            </nav>
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <button className="custom-btn w-full">Log Out</button>
            </div>
        </aside>
    );
}
export default Sidebar;