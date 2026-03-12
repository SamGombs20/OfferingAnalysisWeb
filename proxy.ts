import { NextRequest, NextResponse } from "next/server";

export const proxy =(request:NextRequest)=>{
    const accessToken = request.cookies.get('session_token')?.value;
    const refreshToken = request.cookies.get('refresh_token')?.value
    if(!refreshToken){
        return NextResponse.redirect(new URL('/auth', request.url))
    }
    return NextResponse.next()
}
export const config ={
    matcher:['/dashboard/:path*', '/profile/:path*','/'],
};