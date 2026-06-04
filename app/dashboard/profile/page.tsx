'use client'
import ProfileIcon from "@/app/components/icons/profile";
import { useAuthStore } from "@/app/lib/store";

const Profile =()=>{
    const {user} = useAuthStore()
    return (
        <div>
            <p className="text-lg font-semibold">User Profile</p>
            <div className="flex min-w-50 hover:scale-98 hover:cursor-pointer transition-all duration-200 ease-in-out border border-blue-300 rounded-xl p-3 flex-col">
                <svg viewBox="0 0 20 20" className="w-20 h-20 mb-2">
                    <ProfileIcon/>
                </svg>
                <p className="text-md font-semibold">{user?.firstName} {user?.lastName}</p>
            </div>
        </div>
    );
}
export default Profile;