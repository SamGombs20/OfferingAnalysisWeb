import { NextRequest, NextResponse } from "next/server";

export const middleware =(request:NextRequest)=>{
    const accessToken = request.cookies.get('session_token')?.value;
    if(!accessToken){
        return NextResponse.redirect(new URL('/auth', request.url))
    }
    return NextResponse.next()
}
export const config ={
    matcher:['/dashboard/:path*', '/profile/:path*','/'],
};