"use client";

import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export default function JoinWaitlist() {
	const [email, setEmail] = useState();
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async function (e) {
		e.preventDefault();
		await addDoc(collection(db, "emails"), { email: email });
		setIsSubmitted(true);
		setEmail("");
	};

	useEffect(() => {
		(async () => {
			if (isSubmitted) {
				setTimeout(() => {
					setIsSubmitted(false);
				}, 2000);
			}
		})();
	}, [isSubmitted]);

	return (
		<div className="flex items-center bg-black bg-opacity-10  ">
			<form onSubmit={handleSubmit}>
				<input
					className=" bg-transparent p-2 focus-visible:outline-none"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					type="email"
					required
					placeholder="Your Email"
				/>
				<button type="submit" className="p-2 bg-[#01286B] text-white ">
					{!isSubmitted ? "Submit" : "Submitted!"}
				</button>
			</form>
		</div>
	);
}
