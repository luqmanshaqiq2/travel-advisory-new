import React from "react";
import { useNavigate } from "react-router";


export default function Login() {

	const navigate = useNavigate();

	const Register = () => {
		navigate("/register");
	}

	return (
		<div className="items-center mx-auto justify-center  bg-blue-400 max-w-sm h-130 m-10 rounded-2xl flex-col">
			<div className="flex-col">
				<h1 className="text-4xl font-bold text-white text-center pt-10 pb-6">Login</h1>
				<form className="flex flex-col gap-4 p-10">
					<label htmlFor="Email" className="text-white/80 inline-block">Email</label>
					<input type="text" name="email" placeholder="johndoe@gmail.com" className=" bg-white rounded-md p-2 inline-block"/>
					<label htmlFor="Password" className="text-white/80 inline-block">Password</label>
					<input type="password" name="password" placeholder="Enter your password" className=" bg-white rounded-md p-2 inline-block"/>
					<div className="flex items-center justify-between gap-3">
  						<label className="flex items-center gap-2 text-white">
    					<input type="checkbox" className="accent-white" /> Remember Me </label>
						<a href="#" className="text-white hover:underline"> Forgot Password? </a>
					</div>
					<button type="submit" className="bg-blue-600 p-2 rounded-4xl text-white cursor-pointer mt-2">login</button>	
					<span className="text-white text-center">Don't have an account?<a href="#" className="underline" onClick={Register}> Sign up</a></span>
				</form>
			</div>
		</div>
	);
}

