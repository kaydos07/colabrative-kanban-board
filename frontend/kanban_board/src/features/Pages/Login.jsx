import React from "react";
import { Link } from "react-router";

import LoginForm from "../Authentication/components/LoginForm";

export function Login() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-1/3  h-3/4  bg-[#fde047] flex flex-col items-center justify-start gap-0 rounded-sm">
          <div className="w-93 flex justify-between items-center h-fit m-10">
            <i className="fa-solid fa-ellipsis opacity-30 text-3xl"></i>
            <i className="fa-solid fa-thumbtack opacity-40"></i>
          </div>
          <h1 className="w-93 font-medium text-3xl text-[#1a1c1c] text-left">
            Welcome Back
          </h1>
          <span className="w-93 m-8">
            <LoginForm />
          </span>
          <div className="w-92 border border-[#C0A535]"></div>
          <p className="mt-10 text-[#4b4734] font-bold">
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="text-[#006686]">Sign up</span>
            </Link>
          </p>
          <div className="w-10 h-10 bg-white">
            <svg className="" src="../../public/google.svg" alt="google"></svg>
          </div>
        </div>
      </div>
    </>
  );
}
