'use client'
import { useState } from "react";

const navItems =[
    {label:'Dashboard', href:'/dashboard', icon:'/dashboard_icon.svg'},
    {label:'Analytics', href:'/analytics', icon:'/analytics_icon.svg'}
]
const Sidebar=()=>{
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div>
            
        </div>
    );
}
export default Sidebar;