import { Token, User, UserLogIn, UserRegisterAPI } from "../types/global";
const authAPI = "http://localhost:8000/auth";

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
    return data;
  } else {
    if (res.status == 400) {
      throw new Error("User already has an account, sign in instead!");
    } else {
      throw new Error("Failed to register user!");
    }
  }
};
export const loginUserApi = async (user: UserLogIn):Promise<Token|void> => {
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
    return await res.json()
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
