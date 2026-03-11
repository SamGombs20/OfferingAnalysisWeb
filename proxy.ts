import { NextRequest, NextResponse } from "next/server";

export const proxy =(request:NextRequest)=>{
    const token = request.cookies.get('session_token')?.value;
    if(!token){
        return NextResponse.redirect(new URL('/auth', request.url))
    }
    return NextResponse.next()
}
export const config ={
    matcher:['/dashboard/:path*', '/profile/:path*','/'],
};