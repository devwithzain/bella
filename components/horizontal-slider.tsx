"use client";
import Card from "./card";
import { useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function HorizontalScrollCarousel() {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
	const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	const svgRef = useRef<SVGSVGElement | null>(null);
	const pathRef = useRef<SVGPathElement | null>(null);

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

				// Adjust the speed of the animation by modifying the percentage calculation
				const slowDownFactor = 0.5; // You can tweak this value
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
			className="relative h-[300vh] bg-[#BBB0D2]">
			<div className="sticky top-0 flex h-screen items-center overflow-hidden border">
				{/* <svg
					ref={svgRef}
					viewBox="0 700 4530 988"
					fill="none"
					className="w-full h-full squiggle z-[99] absolute left-[44%] hidden">
					<path
						className="path"
						ref={pathRef}
						d="M185.541 -28.7956C164.841 249.934 144.131 592.145 123.431 870.885C119.691 921.205 99.0809 987.345 48.7309 984.045C3.26088 981.065 -11.8091 911.635 19.9409 878.945C51.6809 846.255 105.601 847.135 147.831 864.245C190.061 881.355 225.681 911.435 266.111 932.445C413.041 1008.79 617.541 936.305 683.581 784.465C731.221 674.945 719.401 530.645 814.091 457.865C907.191 386.305 1043.31 433.055 1140.63 498.755C1237.96 564.455 1333.54 650.355 1450.91 653.675C1630.56 658.755 1783.16 465.915 1958.84 503.825C2038.66 521.045 2099.76 582.745 2162.65 634.835C2225.54 686.915 2305.77 733.805 2384.81 713.315C2529.65 675.755 2549.8 453.695 2688.46 397.455C2799.28 352.505 2916.92 437.245 3006.19 516.825C3095.46 596.405 3211.75 682.175 3323.38 639.255C3407.08 607.075 3454.1 511.195 3538.74 481.575C3606.85 457.745 3682.99 483.345 3743.76 522.265C3804.53 561.185 3856.38 613.065 3918.41 649.925C4123.31 771.685 4423.93 680.335 4526.46 465.175"
						stroke="black"
						strokeWidth="10"
					/>
				</svg> */}

				<motion.div
					style={{ width }}
					className="h-2 bg-black rounded-lg mt-20 z-[999] absolute"></motion.div>
				<motion.div
					style={{ x }}
					className="w-full flex h-full">
					<Card />
				</motion.div>
			</div>
		</section>
	);
}
