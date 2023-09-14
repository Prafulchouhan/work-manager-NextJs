import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const logedInPaths = [''];
    const notLogedInPaths = ['/login','/signup'];
    const authToken = request.cookies.get("authToken")?.value;
    const currentUrl = request.nextUrl.pathname;
    const isLoggedIn = notLogedInPaths.includes(currentUrl);
    if(currentUrl == '/api/login' || currentUrl == '/api/users')return;
    if(isLoggedIn){
        if(authToken){
            return NextResponse.redirect(new URL('/profile/user',request.url))
    }}
    else{
        if(currentUrl.startsWith('/api')){
            return NextResponse.json({
                message: 'Access Denied',
                success: false
            },{
                status:401
            })
        }
        if(!authToken){
            
            return NextResponse.redirect(new URL('/login',request.url));
        }
    } 
   return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [ "/login", "/signup", "/add-task", "/show-task"],
};
