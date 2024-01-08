"use client";

import { useEffect, useRef, useState } from "react";
import CountdownItem from "./CountdownItem";

// Change this to whatever date
const COUNTDOWN_FROM = "12/31/2024";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function Countdown() {
	const intervalRef = useRef(null);

	const [remaining, setRemaining] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		intervalRef.current = setInterval(handleCountdown, 1000);

		return () => clearInterval(intervalRef.current || undefined);
	}, []);

	function handleCountdown() {
		const end = new Date(COUNTDOWN_FROM);

		const now = new Date();

		const distance = +end - +now;

		const days = Math.floor(distance / DAY);
		const hours = Math.floor((distance % DAY) / HOUR);
		const minutes = Math.floor((distance % HOUR) / MINUTE);
		const seconds = Math.floor((distance % MINUTE) / SECOND);

		setRemaining({
			days,
			hours,
			minutes,
			seconds,
		});
	}

	return (
		<div className="w-full max-w-5xl mx-auto flex items-center ">
			<CountdownItem num={remaining.days} text="days" />
			<CountdownItem num={remaining.hours} text="hours" />
			<CountdownItem num={remaining.minutes} text="minutes" />
			<CountdownItem num={remaining.seconds} text="seconds" />
		</div>
	);
}
