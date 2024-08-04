"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Hero, HorizontalSlider } from "@/components";

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
			<HorizontalSlider />
		</>
	);
}
