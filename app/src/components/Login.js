import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute bg-cover top-0 bottom-0 left-0 w-100vw h-100vh z-index:-1">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_small.jpg"
          alt="background-img"
        ></img>
      </div>
      <form className="absolute w-1/3 my-20 p-10 bg-black  mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <>
            <input
              type="text"
              placeholder="Full name"
              className="p-4 my-2 w-full bg-gray-700 h-12"
            />
          </>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700 h-12"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 h-12"
        />
        <button className="p-2 my-6 bg-red-700 w-full rounded-lg h-12">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {isSignIn && (
          <>
            <h1 className="text-1xl text-center">OR</h1>
            <button className="p-2 my-4 w-full rounded-lg h-12 bg-gray-700 bg-opacity-60 hover:bg-gray-800 hover:bg-opacity-60">
              Use a sign-in code
            </button>
            <p className="text-center hover:underline">Forgot password?</p>
          </>
        )}

        <input type="checkbox" className="my-5" />
        <label className="mx-2">Remember me</label>
        <p className="my-2">
          {isSignIn ? "New to Netflix?" : "Already registered?"}{" "}
          <button className="font-bold hover:underline" onClick={toggleForm}>
            {isSignIn ? "Sign up now." : "Sign in here."}
          </button>
        </p>
        <p className="text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};

export default Login;
