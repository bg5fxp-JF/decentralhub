"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Splash() {
	return (
		<motion.div
			initial={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="h-screen w-screen fixed top-0 left-0 z-50 flex items-center justify-center bg-white"
		>
			<Image src="/images/Logo.jpg" width={400} height={200} />
		</motion.div>
	);
}
