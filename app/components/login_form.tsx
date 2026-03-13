"use client";
import { useForm } from "react-hook-form";
import { UserLogIn } from "../types/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLoginSchema } from "../schemas/user";
import { useState } from "react";
import { useAuthStore } from "../lib/store";
import { loginUser } from "../actions/auth";
import { useRouter } from "next/navigation";

export const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogIn>({
    resolver: zodResolver(UserLoginSchema),
    mode: "onChange",
  });
  const { logIn } = useAuthStore();
  const router = useRouter()
  const [apiErrors, setApiErrors] = useState("");
  const onSubmit = async (data: UserLogIn) => {
    setApiErrors("");
    try {
      const user = await loginUser(data)
      logIn(user);
      router.push('/dashboard')
    } catch (err: any) {
      setApiErrors(err.message);
    }
  };
  return (
    <>
      <div className="text-center mb-8 mt-4">
        <p className="mb-1 text-2xl font-semibold">Sign In</p>
        <p className="italic">
          Sign in to your account to continue with analysis
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="input-div">
          <input
            type="text"
            {...register("username")}
            className={`user-input ${errors.username?.message ? "error-inp" : ""}`}
            placeholder="Username"
          />
          {errors.username && (
            <p className="error-txt">{errors.username.message}</p>
          )}
        </div>
        <div className="input-div">
          <input
            type="password"
            {...register("password")}
            className={`user-input ${errors.password?.message ? "error-inp" : ""}`}
            placeholder="Password"
          />
          {errors.password && (
            <p className="error-txt">{errors.password.message}</p>
          )}
        </div>
        {apiErrors && <p className="error-txt text-center mt-4">{apiErrors}</p>}
        <button className="custom-btn w-5/6 mx-auto mt-8">Log in</button>
      </form>
    </>
  );
};
