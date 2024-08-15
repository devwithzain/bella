"use client";
import { useEffect } from "react";
import { Footer } from "@/components";
import Lenis from "@studio-freight/lenis";
import {
	Danger,
	Impact,
	LifeCycle,
	MarketResearch,
	Material,
	Modals,
	Render,
	Solutions,
	WorkHero,
} from "@/container";

export default function Portfolio() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<div className="w-full h-full overflow-hidden">
				<WorkHero />
				<MarketResearch />
				<Danger />
				<Impact />
				<Solutions />
				<LifeCycle />
				<Material />
				<Modals />
				<Render />
				<Footer />
			</div>
		</>
	);
}
