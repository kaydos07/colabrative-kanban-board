import React from "react";
import { Link } from "react-router";

import { ArrowIcon } from "../../components/Icon/miniIcon";
import LoginForm from "../Authentication/components/LoginForm";

export function Login() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center flex-col relative gap-0">
        <div className="absolute flex justify-center items-center flex-col top-7 gap-0">
          <h1 className="m-0 text-[#FFFFFF] text-4xl font-bold">WallBoard</h1>
          <p className="-m-2 text-[#FFFFFF] opacity-50 ">
            {" "}
            Creative Workspace • Project Alpha
          </p>
        </div>
        <div className="w-120 h-3/4 bg-[#7ed4fd] absolute rounded-sm opacity-30 rotate-2 top-30"></div>
        <div className="w-120 h-3/4 bg-[#8df6b2] absolute rounded-sm opacity-30 -rotate-5 top-33 -z-1"></div>
        <div className="w-120 h-3/4  bg-[#fde047] mt-4 flex flex-col items-center justify-start gap-0 rounded-sm -rotate-2">
          <div className="w-93 flex justify-between items-center h-fit m-10">
            <i className="fa-solid fa-ellipsis opacity-30 text-3xl"></i>
            <i className="fa-solid fa-thumbtack opacity-40"></i>
          </div>
          <h2 className="w-93 font-medium text-3xl text-[#1a1c1c] text-left">
            Welcome Back
          </h2>
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
          <Link to="/google">
            <div className="size-12 bg-[#FFFFFF] rounded-xl flex justify-center items-center mt-5">
              <img
                className="size-3/4"
                src="../../google.svg"
                alt="google"
              ></img>
            </div>
          </Link>
        </div>
        <div className="text-white absolute flex flex-row justify-between gap-70 bottom-1/32">
          <p className="opacity-40">"Ideas are the currency of the future."</p>
          <ul className="flex justify-between gap-5 opacity-40">
            <li> Terms </li>
            <li> Privacy</li>
            <li> help </li>
          </ul>
        </div>
        <ArrowIcon className="fill-White absolute right-80 bottom-70 -rotate-10 opacity-40" />
        <ArrowIcon className="fill-White absolute left-60 top-40 -rotate-110 opacity-40" />
      </div>
    </>
  );
}
