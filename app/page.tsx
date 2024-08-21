"use client";
import { PreLoad } from "@/animations";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Footer, Hero, HorizontalSlider } from "@/components";

export default function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		const timeout = setTimeout(() => {
			setIsLoading(false);
			document.body.style.cursor = "default";
		}, 1000);

		return () => clearTimeout(timeout);
	}, []);
	return (
		<>
			<AnimatePresence mode="wait">{isLoading && <PreLoad />}</AnimatePresence>
			{!isLoading && (
				<>
					<Hero />
					<HorizontalSlider />
					<Footer />
				</>
			)}
		</>
	);
}
