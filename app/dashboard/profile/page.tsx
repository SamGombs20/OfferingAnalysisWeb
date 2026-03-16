'use client'
import { useAuthStore } from "@/app/lib/store";

const Profile =()=>{
    const {user} = useAuthStore()
    return (
        <div>
            {user?.firstName +" "+user?.lastName}
        </div>
    );
}
export default Profile;