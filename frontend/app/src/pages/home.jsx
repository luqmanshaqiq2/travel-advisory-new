import React from "react";
import { useNavigate } from "react-router";

export default function Home() {

  const navigate = useNavigate();

  const Login = () => {
    navigate('/login');
  }

  const SignUp = () => {
    navigate('/register');
  }
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[200vh] bg-cover bg-center bg-fixed gap-6 pt-20"
      style={{ backgroundImage: "url('/img/bg.png')" }}
    >

		{/* Top-left Login / Sign Up buttons */}
      <div className="absolute top-4 right-4 flex gap-4">
        <button onClick={Login} className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-3xl font-medium hover:bg-white/30 transition cursor-pointer">
          Login
        </button>
        <button onClick={SignUp} className="px-4 py-2 bg-white text-black rounded-3xl font-medium shadow-md hover:bg-pink-300 hover:text-white  transition cursor-pointer">
          Sign Up
        </button>
      </div>

      {/* Heading and Tagline */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-dm-sans text-center text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          Welcome to <span style={{ fontFamily: 'Times New Roman' }} className="italic font-normal">Pearl</span> Lanka
        </h1>

        <h3 className="text-center text-2xl text-white/70">
          The Island Guide, Trusted & Updated.
        </h3>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
        <button onClick={Login} className="px-6 py-3 bg-white text-black rounded-4xl font-medium shadow-md hover:bg-orange-100 transition cursor-pointer">
          Get Started
        </button>

        <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-4xl font-medium hover:bg-white/30 transition cursor-pointer">
          See how it works
        </button>
      </div>

      {/* Big square below */}
      <div className="w-[850px] h-[500px] bg-yellow-500 mt-12"></div>
    </div>
  );
}
