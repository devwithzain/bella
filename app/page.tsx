"use client";
import { useEffect } from "react";
import { Hero } from "@/components";
import Lenis from "@studio-freight/lenis";

export default function App() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<Hero />
		</>
	);
}
