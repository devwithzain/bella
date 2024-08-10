"use client";
import Image from "next/image";
import { projects1, projects2 } from "@/constants";
import { useRef, useEffect } from "react";
import {
	AnimatePresence,
	motion,
	useMotionValue,
	useTransform,
} from "framer-motion";
import { TextMask } from "@/animations";

export default function Portfolio() {
	const phares1 = ["Portfolio"];
	const phares2 = ["Bella Han"];
	const containerRef1 = useRef<HTMLDivElement | null>(null);
	const containerRef2 = useRef<HTMLDivElement | null>(null);
	const xValue1 = useMotionValue(0);
	const xValue2 = useMotionValue(0);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const container1 = containerRef1.current;
			const container2 = containerRef2.current;

			if (container1 && container2) {
				const { left: left1, width: width1 } =
					container1.getBoundingClientRect();
				const { left: left2, width: width2 } =
					container2.getBoundingClientRect();

				const mouseX = e.clientX;

				const offset1 = (mouseX - left1 - width1 / 2) / (width1 / 2);
				const offset2 = (mouseX - left2 - width2 / 2) / (width2 / 2);

				xValue1.set(offset1);
				xValue2.set(-offset2); // Invert the offset for the second container
			}
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, [xValue1, xValue2]);

	const xTransform1 = useTransform(xValue1, [-1, 1], ["0px", "-700px"]);
	const xTransform2 = useTransform(xValue2, [-1, 1], ["0px", "-700px"]); // Adjust transform for the second container

	return (
		<div className="w-full flex flex-col my-20 overflow-x-hidden">
			<div className="flex flex-col gap-2 items-center mt-20">
				<h1 className="text-[#141313] text-[180px] lg:text-[150px] md:text-[130px] xm:text-[80px] sm:text-[80px] font-normal uppercase leading-[200px] lg:leading-[180px] md:leading-none xm:leading-none sm:leading-none font-BananasFont">
					<TextMask>{phares1}</TextMask>
				</h1>
				<motion.h1 className="w-fit p-4 text-[#BBB0D2] text-[180px] lg:text-[150px] md:text-[130px] xm:text-[80px] sm:text-[80px] font-normal uppercase leading-[150px] lg:leading-[180px] md:leading-none xm:leading-none sm:leading-none font-BananasFont">
					<TextMask>{phares2}</TextMask>
				</motion.h1>
			</div>
			<div
				ref={containerRef1}
				className="flex-col relative mt-20 z-10 overflow-hidden flex gap-10">
				<motion.div className="flex relative gap-[2vw] w-[100vw]">
					<AnimatePresence mode="wait">
						{projects1.map((project) => (
							<motion.div
								key={project.id}
								style={{ x: xTransform1 }}
								initial={{
									opacity: 0,
									x: project.id % 2 === 0 ? 150 : -150,
								}}
								animate={{
									opacity: 1,
									x: 0,
								}}
								exit={{
									opacity: 0,
								}}
								transition={{
									duration: 1,
									ease: "easeInOut",
									delay: 0.1 * project.id,
								}}
								className="w-[280px] h-[550px] lg:w-[250px] lg:h-[550px] md:w-[200px] md:h-[400px] rounded-full flex items-center justify-center relative group shrink-0 cursor-pointer">
								<div className="w-full h-full bg-black/20 backdrop-blur-sm absolute flex transition-opacity duration-500 ease-in-out group-hover:opacity-0 top-0 left-0 rounded-full z-10" />
								<div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-transform duration-500 ease-in-out group-hover:scale-110">
									<h1 className="text-[20px] text-center font-Poppins font-semibold uppercase text-white group-hover:text-black transition-colors duration-500 ease-in-out">
										{project.title}
									</h1>
								</div>
								<Image
									src={project.src}
									alt={project.title}
									className="w-full h-full object-cover rounded-full"
								/>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>
			</div>
			<div
				ref={containerRef2}
				className="flex-col relative mt-20 z-10 overflow-hidden flex gap-10">
				<motion.div className="flex relative gap-[2vw] w-[100vw]">
					<AnimatePresence mode="wait">
						{projects2.map((project) => (
							<motion.div
								key={project.id}
								style={{ x: xTransform2 }}
								initial={{
									opacity: 0,
									x: project.id % 2 === 0 ? 150 : -150,
								}}
								animate={{
									opacity: 1,
									x: 0,
								}}
								exit={{
									opacity: 0,
								}}
								transition={{
									duration: 1,
									ease: "easeInOut",
									delay: 0.1 * project.id,
								}}
								className="w-[280px] h-[550px] lg:w-[250px] lg:h-[550px] md:w-[200px] md:h-[400px] rounded-full flex items-center justify-center relative group shrink-0 cursor-pointer">
								<div className="w-full h-full bg-black/20 backdrop-blur-sm absolute flex transition-opacity duration-500 ease-in-out group-hover:opacity-0 top-0 left-0 rounded-full z-10" />
								<div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-transform duration-500 ease-in-out group-hover:scale-110">
									<h1 className="text-[20px] text-center font-Poppins font-semibold uppercase text-white group-hover:text-black transition-colors duration-500 ease-in-out">
										{project.title}
									</h1>
								</div>
								<Image
									src={project.src}
									alt={project.title}
									className="w-full h-full object-cover rounded-full"
								/>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</div>
	);
}
