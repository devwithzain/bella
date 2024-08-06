"use client";
import Card from "./card";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function HorizontalScrollCarousel() {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

	return (
		<section
			ref={targetRef}
			className="relative h-[300vh]">
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				<motion.div
					style={{ x }}
					className="w-full flex h-full">
					<Card />
				</motion.div>
			</div>
		</section>
	);
}
