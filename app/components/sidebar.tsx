'use client'
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
        <aside className={`custom-sidebar fixed inset-y-0 left-0 z-40 w-72 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto ${isOpen?"translate-x-0":"-translate-x-full"}`}>

        </aside>
    );
}
export default Sidebar;