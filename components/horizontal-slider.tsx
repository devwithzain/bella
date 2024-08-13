"use client";
import Card from "./card";
import { useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function HorizontalScrollCarousel() {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const svgRef = useRef<SVGSVGElement | null>(null);
	const pathRef = useRef<SVGPathElement | null>(null);
	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

	useEffect(() => {
		const svg = svgRef.current;
		const path = pathRef.current;
		const target = targetRef.current;

		if (!svg || !path || !target) return;

		const pathLength = path.getTotalLength();

		path.style.strokeDasharray = pathLength.toString();
		path.style.strokeDashoffset = pathLength.toString();

		const handleScroll = () => {
			const rect = target.getBoundingClientRect();
			const startAnimationAt = window.innerHeight; // Adjust the start position
			const distance = window.scrollY - rect.top + startAnimationAt;

			if (distance > 0 && rect.top < window.innerHeight) {
				const totalDistance =
					svg.clientHeight + rect.height - window.innerHeight;
				const percentage = distance / totalDistance;

				const slowDownFactor = 0.32;
				const adjustedPercentage = percentage * slowDownFactor;

				path.style.strokeDashoffset = `${
					pathLength * (1 - adjustedPercentage)
				}`;
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section
			ref={targetRef}
			className="relative h-[300vh] bg-[#BBB0D2] skils-sec">
			<div className="sticky top-0 flex h-screen items-center overflow-hidden border svg-container">
				<motion.div
					style={{ x }}
					className="w-full flex h-full">
					<Card />
					<svg
						ref={svgRef}
						width="1920"
						height="1017"
						viewBox="0 0 1920 1100"
						fill="none"
						className="w-auto h-auto overflow-visible left-[65%] shrink-0 absolute z-[9]">
						<path
							className="path"
							ref={pathRef}
							d="M-362.927 1C-399.921 279.741 -436.933 621.965 -473.928 900.717C-480.612 951.039 -517.445 1017.18 -607.429 1013.88C-688.691 1010.9 -715.623 941.468 -658.881 908.777C-602.156 876.086 -505.793 876.966 -430.321 894.076C-354.849 911.187 -291.19 941.268 -218.935 962.279C43.6524 1038.63 409.127 966.139 527.151 814.293C612.292 704.769 591.167 560.463 760.394 487.68C926.778 416.117 1170.05 462.869 1343.97 528.572C1517.92 594.274 1688.73 680.178 1898.49 683.498C2219.56 688.578 2492.28 495.73 2806.25 533.642C2948.9 550.863 3058.09 612.565 3170.49 664.657C3282.88 716.739 3426.27 763.631 3567.52 743.14C3826.38 705.579 3862.39 483.51 4110.2 427.268C4308.25 382.316 4518.49 467.059 4678.03 546.642C4837.57 626.226 5045.4 711.999 5244.9 669.077C5394.49 636.896 5478.52 541.012 5629.78 511.391C5751.51 487.56 5887.58 513.161 5996.19 552.083C6104.79 591.004 6197.46 642.886 6308.32 679.748C6674.51 801.513 7211.76 710.159 7395 494.99"
							stroke="black"
							strokeWidth="10"
						/>
					</svg>
				</motion.div>
			</div>
		</section>
	);
}
