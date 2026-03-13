import { cookies } from "next/headers";
import { User, UserLogIn, UserRegisterAPI } from "../types/global";
import { loginUser } from "../actions/auth";
import { accessOptions, refreshOptions } from "@/utils/utils";
const authAPI = "http://localhost:8000/auth";
const userAPI = "http://localhost:8000/users";

export const registerUserApi = async (user: UserRegisterAPI): Promise<User> => {
  const res = await fetch(`${authAPI}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(user),
  });
  if (res.ok) {
    const data = await res.json();
    const logIn: UserLogIn = {
      username: user.username,
      password: user.password,
    };
    await loginUser(logIn);
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
  if (res.ok) {
    const data = await res.json();
    (await cookies()).set("session_token", data.access_token, accessOptions);
    (await cookies()).set("refresh_token", data.refresh_token, refreshOptions);
  } else {
    if (res.status === 404) {
      throw new Error("Check your username or password then try again!");
    } else {
      throw new Error("Failed to log in user");
    }
  }
};

export const refreshToken = async () => {
  const res = await fetch(`${authAPI}/refresh`, {
    method: "POST",
    credentials: "include",
  });
  if (res.ok) {
    const data = await res.json();
    (await cookies()).set("session_token", data.access_token, accessOptions);
    (await cookies()).set("refresh_token", data.refresh_token, refreshOptions);
  }
};

export const getAuthenticatedUser = async (): Promise<User> => {
  const res = await fetch(`${userAPI}/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(await cookies()).get("session_token")?.value}`,
    },
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw new Error("Failed to get authenticated user");
  }
};
