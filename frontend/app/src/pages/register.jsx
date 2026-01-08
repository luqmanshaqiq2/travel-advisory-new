import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function Register() {
	const [nationality, setNationality] = useState("");

	return(
		<div className="items-center justify-center mx-auto bg-yellow-50 w-1/3 h-130 flex-col p-5 m-10 rounded-2xl">
			<h1 className="text-center text-blue-950 text-3xl pt-5">Register</h1>
			<form className="flex flex-col gap-1.5 mt-3">
				<div className="flex gap-2">
					<div className="flex-1 flex flex-col">
						<label htmlFor="firstName">First Name</label>
						<input type="text" name="firstName" placeholder="John" className=" bg-white rounded-md p-2 w-full"/>
					</div>
					<div className="flex-1 flex flex-col">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" name="lastName" placeholder="Doe" className=" bg-white rounded-md p-2 w-full"/>
					</div>
				</div>
				<label htmlFor="email" className="inline-block">Email</label>
				<input type="text" name="email" placeholder="johndoe@gmail.com" className=" bg-white rounded-md p-2 inline-block"/>
				<label htmlFor="password" className="inline-block">Password</label>
				<input type="password" name="password" placeholder="••••••••" className=" bg-white rounded-md p-2 inline-block"/>
				<label htmlFor="nationality">Nationality</label>
				<ReactFlagsSelect selected={nationality} onSelect={(code) => setNationality(code)} />
				<button type="submit" className="bg-yellow-400 p-2 rounded-4xl text-white cursor-pointer mt-4 w-1/3 mx-auto">Register</button>
			</form>

		</div>
	);
	
	
	
}

