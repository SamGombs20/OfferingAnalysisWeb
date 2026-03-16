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
        <aside className={`custom-sidebar fixed inset-y-0 left-0 z-40 w-72 transform border-r border-blue-200 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto ${isOpen?"translate-x-0":"-translate-x-full"}`}>
            <div className="flex font-bold text-3xl px-6 py-3">
                <p className="blue-txt">Offering</p>
                <p className="red-txt">Analysis</p>
            </div>

            <nav className="mt-6 px-3 space-y-1">
                {navItems.map((item)=>{
                    const isActive = pathName===item.href
                    return(
                        <Link key={item.href} href={item.href}></Link>
                    )
                })}
            </nav>
        </aside>
    );
}
export default Sidebar;