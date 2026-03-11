import { cookies } from "next/headers";
import { Token, User, UserLogIn, UserRegisterAPI } from "../types/global";
import { loginUser } from "../actions/auth";
const authAPI = "http://localhost:8000/auth";
const userAPI = "http://localhost:8000/users"


export const registerUserApi = async (
  user: UserRegisterAPI,
): Promise<User | void> => {
  const res = await fetch(`${authAPI}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(user),
  });
  if (res.ok) {
    const data = await res.json();
    const logIn:UserLogIn = {
        username:user.username,
        password:user.password
    }
    await loginUser(logIn)
    return data;
  } else {
    if (res.status == 400) {
      throw new Error("User already has an account, sign in instead!");
    } else {
      throw new Error("Failed to register user!");
    }
  }
};
export const loginUserApi = async (user: UserLogIn) => {
  const body = new URLSearchParams();
  body.append("username", user.username);
  body.append("password", user.password);

  const res = await fetch(`${authAPI}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });
  if(res.ok){
     const data = await res.json()
     ;(await cookies()).set("session_token", data.access_token,{
        httpOnly:true,
        secure:true,
        path:'/'
     })
  }
  else{
    if(res.status===404){
        throw new Error("Check your username or password then try again!")
    }
    else{
        throw new Error("Failed to log in user")
    }
  }
};

export const getAuthenticatedUser = async()=>{
    const res = await fetch(`${userAPI}/me`,{
        method:"GET",
        headers:{
            Authorization:`Bearer ${(await cookies()).get('session_token')}`
        }
    })
    if(res.ok){
        console.log(res.json())
    }
    else{
        throw new Error("Failed to get authenticated user")
    }
}

