import React from "react";
import { PiCheckSquare, PiSquare } from "react-icons/pi";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="font-poppins h-screen flex justify-center items-center">
      <div className="text-center shadow-md p-10 rounded-2xl ring-1 ring-slate-100 min-w-[380px]">
        <div>
          <p className="font-medium">Login</p>
        </div>
        <div className="space-y-3">
          <div className="text-left">
            <label className="text-[12px] text-slate-500">Email</label>
            <span className="flex items-center">
              <svg
                className="text-slate-800 absolute fill-current ml-2"
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" />
              </svg>

              <input
                type="text"
                className="border border-slate-500 transition duration-100 focus:outline-none focus:border-slate-400 focus:ring focus:ring-slate-300 rounded-lg p-1 pl-9 w-full"
              />
            </span>
          </div>
          <div className="text-left">
            <label className="text-[12px] text-slate-500">Password</label>
            <span className="flex items-center">
              <svg
                className="text-slate-800 absolute fill-current ml-2"
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M19,8.424V7A7,7,0,0,0,5,7V8.424A5,5,0,0,0,2,13v6a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V13A5,5,0,0,0,19,8.424ZM7,7A5,5,0,0,1,17,7V8H7ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3Z" />
                <path d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Z" />
              </svg>
              <input
                type="password"
                className="border border-slate-500 transition duration-100 focus:outline-none focus:border-slate-400 focus:ring focus:ring-slate-300 rounded-lg p-1 pl-9 w-full"
              />
            </span>
            <div className="flex items-center py-2 cursor-pointer">
              <PiSquare className="text-slate-500" size={17} />
              <label className="text-sm text-slate-500">Show password</label>
            </div>
            <div className="text-center">
              <button className="text-white font-bold bg-slate-800 rounded-lg w-full my-5 py-2 hover:bg-slate-700 hover:transition-colors hover:duration-200">
                Login
              </button>
            </div>
            <div className=" text-center space-x-1">
              <label className="text-[12px]">Don't have an account?</label>
              <Link
                to="/register"
                className="text-[12px] underline text-blue-400"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
