"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function CountdownItem({ num, text }) {
	return (
		<div className="relative w-1/4 h-24 md:h-28 flex flex-col gap-1 md:gap-2 items-center justify-center m-1 p-2 border-slate-200">
			<div className="absolute flex mx-auto w-full md:w-1/2 h-full  bg-black bg-opacity-10"></div>
			<div className="relative flex flex-col items-center  w-full text-center  overflow-hidden ">
				<AnimatePresence mode="popLayout">
					<motion.span
						key={num}
						initial={{ y: "100%" }}
						animate={{ y: "0%" }}
						exit={{ y: "-100%" }}
						transition={{ ease: "backIn", duration: 0.75 }}
						className=" block text-2xl md:text-4xl lg:text-6xl  text-black font-medium"
					>
						{num}
					</motion.span>
				</AnimatePresence>
			</div>
			<span className="text-xsm md:text-sm lg:text-base font-light text-slate-500">
				{text}
			</span>
		</div>
	);
}
