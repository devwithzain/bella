"use client";
import Image from "next/image";
import { projects1 } from "@/constants";
import { useRef, useState, useEffect } from "react";
import {
	AnimatePresence,
	motion,
	useMotionValue,
	useTransform,
	useSpring,
} from "framer-motion";

export default function Portfolio() {
	const [clicked, setClicked] = useState(false);
	const [hovered, setHovered] = useState(false);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const xValue = useMotionValue(0);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (containerRef.current) {
				const { left, width } = containerRef.current.getBoundingClientRect();
				const mouseX = e.clientX - left;
				const centerX = width / 2;
				const offset = (mouseX - centerX) / centerX; // Calculate offset (-1 to 1)
				xValue.set(offset);
			}
		};

		if (containerRef.current) {
			containerRef.current.addEventListener("mousemove", handleMouseMove);
		}

		return () => {
			if (containerRef.current) {
				containerRef.current.removeEventListener("mousemove", handleMouseMove);
			}
		};
	}, [xValue]);

	const xTransform = useTransform(xValue, [-1, 1], ["0px", "-650px"]);

	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const cursorSize = 0;
	const [isCursorInside, setIsCursorInside] = useState(true);

	const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
	const smoothMouse = {
		x: useSpring(mouse.x, smoothOptions),
		y: useSpring(mouse.y, smoothOptions),
	};

	const manageMouseMove = (e: any) => {
		const { clientX, clientY } = e;
		const rect = e.currentTarget.getBoundingClientRect();

		const isInside =
			clientX >= rect.left &&
			clientX <= rect.right &&
			clientY >= rect.top &&
			clientY <= rect.bottom;

		setIsCursorInside(isInside);

		if (isInside) {
			let x = clientX - rect.left;
			let y = clientY - rect.top;

			x = Math.max(0, Math.min(x, rect.width - cursorSize));
			y = Math.max(0, Math.min(y, rect.height - cursorSize));

			mouse.x.set(x);
			mouse.y.set(y);
		}
	};

	return (
		<div className="w-full flex flex-col my-20 overflow-x-hidden">
			<div
				className="relative w-full overflow-hidden"
				onMouseMove={manageMouseMove}
				onMouseEnter={() => setIsCursorInside(true)}
				onMouseLeave={() => setIsCursorInside(false)}>
				<h1
					className="w-full bg-[#BBB0D2] text-primary text-[80px] lg:text-[60px] md:text-[50px] xm:text-[40px] sm:text-[40px] py-2 text-center font-normal uppercase leading-[180px] xm:leading-none sm:leading-none font-BananasFont cursor-none"
					onClick={() => setClicked(!clicked)}>
					My Awesome Portfolio
				</h1>
				<motion.div
					className="w-[100px] h-[100px] absolute rounded-full bg-primary/50 pointer-events-none z-30 flex items-center justify-center sm:hidden xm:hidden"
					style={{
						left: smoothMouse.x,
						top: smoothMouse.y,
					}}
					initial={{ scale: 0 }}
					animate={{ scale: isCursorInside ? 1 : 0 }}
					transition={{ duration: 0.2 }}>
					<h1 className="text-[18px] font-Poppins font-bold text-center">
						{clicked ? "Close" : "Click Me!"}
					</h1>
				</motion.div>
			</div>
			<div
				ref={containerRef}
				className={`flex-col relative mt-20 z-10 overflow-hidden ${
					clicked ? "flex" : "hidden"
				}`}>
				<motion.div className="flex relative gap-[2vw] w-[100vw]">
					{clicked && (
						<AnimatePresence mode="wait">
							{projects1.map((project) => (
								<motion.div
									key={project.id}
									style={{ x: xTransform }}
									initial={{
										opacity: 0,
										scale: project.id % 2 === 0 ? 0.5 : 0.5,
										y: project.id % 2 === 0 ? 150 : -150,
									}}
									animate={{
										opacity: 1,
										scale: 1,
										y: 0,
									}}
									exit={{
										opacity: 0,
									}}
									transition={{
										duration: 0.5,
										ease: "easeInOut",
										delay: 0.1 * project.id,
									}}
									className="w-[280px] h-[550px] lg:w-[250px] lg:h-[550px] md:w-[200px] md:h-[400px]  rounded-full flex items-center justify-center relative group shrink-0 cursor-pointer">
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
					)}
				</motion.div>
			</div>
		</div>
	);
}
