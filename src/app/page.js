"use client";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Splash from "./components/Splash";
import { AnimatePresence } from "framer-motion";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		(async () => {
			setTimeout(() => {
				setIsLoading(false);
				document.body.style.cursor = "default";
				window.scrollTo(0, 0);
			}, 1500);
		})();
	}, []);

	return (
		<main>
			<AnimatePresence mode="wait">{isLoading && <Splash />}</AnimatePresence>
			<Hero />
		</main>
	);
}
