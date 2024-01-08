import Link from "next/link";
import Countdown from "./Countdown";
import { FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="relative flex flex-col items-center  w-full max-w-[1440px] h-screen gap-8  mx-auto  px-6  bg-bg1 sm:px-16 ">
			{/* <Image
				src="/images/bg.webp"
				className="absolute object-cover opacity-15 w-full h-full -z-10"
				width={200}
				height={100}
			/> */}
			<Image
				className="relative -z-20"
				src="/images/Logo.jpg"
				width={200}
				height={100}
			/>
			<div className="flex flex-col gap-3 items-center text-center">
				<h1 className="text-4xl md:text-6xl font-bold -mt-10 sm:mt-0">
					<span className=" text-[#01286B] ">Coming</span>{" "}
					<span className=" text-[#FDD605] ">Soon</span>
				</h1>
				<p className=" w-full md:w-[75%] font-light text-slate-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. At quam
					asperiores iusto ex cum quod sapiente eos suscipit, ab voluptatibus
					sed, aperiam, adipisci odit? Dolor maxime sit repellendus totam
					deserunt.
				</p>
			</div>
			{/* <Countdown /> */}
			<div className="flex flex-col gap-3 items-center text-center mt-10">
				<p className=" w-full font-light text-slate-500">
					Notify Me When It's Ready
				</p>
				<div className="flex items-center bg-black bg-opacity-10  ">
					<input
						className=" bg-transparent p-2 focus-visible:outline-none"
						type="text"
						placeholder="Your Email"
					/>
					<button className="p-2 bg-[#01286B] text-white ">Submit</button>
				</div>
				<div className="flex gap-x-3 mt-2">
					<Link href="https://t.me/DeCentra1Hub">
						<FaTelegramPlane fill="#01286B" />
					</Link>
					<Link href="https://www.instagram.com/decentralhub">
						<FaInstagram fill="#FDD605" />
					</Link>
					<Link href="https://tiktok.com/">
						<FaTiktok fill="#01286B" />
					</Link>
				</div>
			</div>
		</section>
	);
}
