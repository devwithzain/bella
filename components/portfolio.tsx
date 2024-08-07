"use client";
import { useRef } from "react";
import Image from "next/image";
import { projects1, projects2 } from "@/constants";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Portfolio() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
	const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

	return (
		<div className="w-full flex flex-col my-20 overflow-x-hidden">
			<h1 className="text-[#141313] text-[120px] text-center font-normal uppercase leading-[180px] font-BananasFont">
				My Awesome Portfolio
			</h1>
			<div
				ref={container}
				className="flex flex-col gap-[3vw] relative mt-10 bg-primary z-10">
				<motion.div
					style={{ x: x1 }}
					className="flex relative gap-[2vw] w-[100vw] -left-[10vw]">
					{projects1.map((project) => (
						<div
							key={project.id}
							className="w-[300px] h-[600px] rounded-full flex items-center justify-center relative group shrink-0 cursor-pointer">
							<div className="w-full h-full bg-black/20 backdrop-blur-sm absolute flex transition-opacity duration-500 ease-in-out group-hover:opacity-0 top-0 left-0 rounded-full z-10" />
							<div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-transform duration-500 ease-in-out group-hover:scale-110">
								<h1 className="text-[20px] text-center font-Poppins font-semibold uppercase text-white group-hover:text-black transition-colors duration-500 ease-in-out">
									{project.title}
								</h1>
							</div>
							<Image
								src={project.src}
								alt=""
								className="w-full h-full object-cover rounded-full"
							/>
						</div>
					))}
				</motion.div>
				<motion.div
					style={{ x: x2 }}
					className="flex relative gap-[2vw] w-[100vw] -left-[10vw]">
					{projects2.map((project) => (
						<div
							key={project.id}
							className="w-[300px] h-[600px] rounded-full flex items-center justify-center relative group shrink-0 cursor-pointer">
							<div className="w-full h-full bg-black/20 backdrop-blur-sm absolute flex transition-opacity duration-500 ease-in-out group-hover:opacity-0 top-0 left-0 rounded-full z-10" />
							<div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-transform duration-500 ease-in-out group-hover:scale-110">
								<h1 className="text-[20px] text-center font-Poppins font-semibold uppercase text-white group-hover:text-black transition-colors duration-500 ease-in-out">
									{project.title}
								</h1>
							</div>
							<Image
								src={project.src}
								alt=""
								className="w-full h-full object-cover rounded-full"
							/>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
