"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const imgs = ["/slider1.jpg", "/slider2.jpg", "/slider3.jpg", "/slider4.jpg"];

const ONE_SECOND = 500;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
	type: "spring",
	mass: 3,
	stiffness: 400,
	damping: 50,
};

export default function DesignsSlider() {
	const [imgIndex, setImgIndex] = useState(0);
	const dragX = useMotionValue(0);
	const cursorSize = 100; // Size of the cursor follower
	const [isCursorInside, setIsCursorInside] = useState(true);

	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
	const smoothMouse = {
		x: useSpring(mouse.x, smoothOptions),
		y: useSpring(mouse.y, smoothOptions),
	};

	const manageMouseMove = (e: any) => {
		const { clientX, clientY } = e;
		const rect = e.currentTarget.getBoundingClientRect();

		// Check if the cursor is inside the container
		const isInside =
			clientX >= rect.left &&
			clientX <= rect.right &&
			clientY >= rect.top &&
			clientY <= rect.bottom;

		setIsCursorInside(isInside);

		if (isInside) {
			let x = clientX - rect.left;
			let y = clientY - rect.top;

			// Ensure the cursor is within the bounds
			x = Math.max(0, Math.min(x, rect.width - cursorSize));
			y = Math.max(0, Math.min(y, rect.height - cursorSize));

			mouse.x.set(x);
			mouse.y.set(y);
		}
	};

	useEffect(() => {
		const intervalRef = setInterval(() => {
			const x = dragX.get();

			if (x === 0) {
				setImgIndex((pv) => {
					if (pv === imgs.length - 1) {
						return 0;
					}
					return pv + 1;
				});
			}
		}, AUTO_DELAY);

		return () => clearInterval(intervalRef);
	}, [dragX]);

	const onDragEnd = () => {
		const x = dragX.get();

		if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
			setImgIndex((pv) => pv + 1);
		} else if (x >= DRAG_BUFFER && imgIndex > 0) {
			setImgIndex((pv) => pv - 1);
		}
	};

	return (
		<div
			className="w-full h-[80vh] relative overflow-hidden z-[9999]"
			onMouseMove={manageMouseMove}
			onMouseEnter={() => setIsCursorInside(true)}
			onMouseLeave={() => setIsCursorInside(false)}>
			{/* Custom Cursor Follower */}
			<motion.div
				className="w-[100px] h-[100px] absolute rounded-full bg-primary/50 pointer-events-none z-30 flex items-center justify-center sm:hidden xm:hidden"
				style={{
					left: smoothMouse.x,
					top: smoothMouse.y,
					transform: `translate(-50%, -50%)`, // Centers the cursor follower
				}}
				initial={{
					scale: 0,
				}}
				animate={{
					scale: isCursorInside ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}>
				<h1 className="text-[22px] font-Poppins font-bold">Drag</h1>
			</motion.div>
			{/* Draggable Images */}
			<motion.div
				drag="x"
				dragConstraints={{
					left: 0,
					right: 0,
				}}
				style={{
					x: dragX,
				}}
				animate={{
					translateX: `-${imgIndex * 100}%`,
				}}
				transition={SPRING_OPTIONS}
				onDragEnd={onDragEnd}
				className="w-full h-full flex items-center py-10 cursor-none">
				{imgs.map((imgSrc, idx) => {
					return (
						<motion.div
							key={idx}
							style={{
								backgroundImage: `url(${imgSrc})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
							animate={{
								scale: imgIndex === idx ? 0.95 : 0.85,
							}}
							transition={SPRING_OPTIONS}
							className="w-full h-full shrink-0 rounded-xl object-cover"
						/>
					);
				})}
			</motion.div>
		</div>
	);
}
