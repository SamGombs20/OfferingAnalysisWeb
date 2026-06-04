'use client'
import ChurchIcon from "@/app/components/icons/church";
import ProfileIcon from "@/app/components/icons/profile";
import { useAuthStore } from "@/app/lib/store";

const Profile =()=>{
    const {user} = useAuthStore()
    return (
        <div>
            <p className="text-4xl blue-txt font-semibold">User Profile</p>
            <div className="flex w-full gap-3 flex-wrap justify-evenly lg:w-3xl lg:justify-between mt-8 mb-8">
                <div className="flex min-w-50 hover:scale-98 hover:cursor-pointer transition-all duration-200 ease-in-out border border-blue-300 rounded-xl p-3 flex-col">
                <div className="text-blue-800 items-center">
                    <svg viewBox="0 0 20 20" className="w-20 h-20 mb-2">
                    <ProfileIcon/>
                </svg>
                </div>
                <p className="text-md font-semibold">{user?.firstName} {user?.lastName}</p>
            </div>
            <div className="flex min-w-50 hover:scale-98 hover:cursor-pointer transition-all duration-200 ease-in-out border border-blue-300 rounded-xl p-3 flex-col">
                <div className="text-blue-800 items-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-20 h-20 mb-2">
                    <ChurchIcon/>
                </svg>
                </div>
                <p className="text-md font-semibold">{user?.church}</p>
            </div>
            </div>
        </div>
    );
}
export default Profile;