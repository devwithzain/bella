"use client";
import gsap from "gsap";
import Link from "next/link";
import { menuItem } from "@/constants";
import { navVariants } from "@/motion";
import { usePathname } from "next/navigation";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

export default function Menu() {
	const pathname = usePathname();
	const { scrollY } = useScroll();
	const [isOpen, setIsOpen] = useState(false);
	const [hidden, setHidden] = useState(false);
	const timelineRef = useRef<gsap.core.Timeline>();
	const toggleButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		gsap.registerPlugin(CSSRulePlugin);
		const activeItemIndicator = CSSRulePlugin.getRule("#active-index");

		gsap.set("#menu-item p", { y: 225 });

		const timeline = gsap.timeline({ paused: true });

		timeline.to("#overlay", {
			duration: 1.5,
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			ease: "power4.inOut",
		});

		timeline.to(
			"#menu-item p",
			{
				duration: 1.5,
				y: 0,
				stagger: 0.2,
				ease: "power4.out",
			},
			"-=1",
		);

		timeline.to(
			activeItemIndicator,
			{
				width: "100%",
				duration: 1,
				ease: "power4.out",
				delay: 0.5,
			},
			"<",
		);

		timeline.to(
			"#sub-nav",
			{
				bottom: "5%",
				opacity: 1,
				duration: 0.5,
				delay: 0.5,
			},
			"<",
		);

		timelineRef.current = timeline;
	}, []);

	const toggleMenu = () => {
		if (timelineRef.current) {
			if (isOpen) {
				timelineRef.current.reverse();
			} else {
				timelineRef.current.play();
			}
			setIsOpen(!isOpen);
		}
	};

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (previous && latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<>
			<motion.nav
				className="fixed top-0 left-0 w-full flex justify-between items-center h-[10vh] padding-x z-[9999] backdrop-blur-sm"
				variants={navVariants}
				initial="hidden"
				viewport={{ once: true }}
				whileInView={hidden ? "hidden" : "vissible"}>
				<div>
					<p className="text-[20px] sm:text-[16px] xm:text-[16px] font-BananasFont">
						@bella
					</p>
				</div>
				<div className="text-center font-BananasFont xm:hidden sm:hidden">
					<Link
						href="/"
						className="text-[30px] sm:text-[18px] xm:text-[16px] font-BananasFont">
						The Elite Portfolio
					</Link>
				</div>
				<div
					className="flex bg-black p-[12px] items-center justify-center rounded-full cursor-pointer"
					onClick={toggleMenu}>
					<button
						className={`flex justify-center items-center bg-[#ffffff00] rounded-[4px] outline-none h-[20px] w-[20px] border-none transition-all duration-[0.25s] ease-out cursor-pointer before:content-[""] before:w-[35px] xm:before:w-[25px] sm:before:w-[25px] xm:after:w-[25px] sm:after:w-[25px] before:h-[2px] before:absolute before:bg-white before:will-change-transform before:-translate-y-[3px] after:content-[""] after:w-[35px] after:h-[2px] after:absolute after:bg-white after:will-change-transform after:translate-y-[2px] before:transition-all before:duration-[0.3s] before:ease-out after:transition-all after:duration-[0.3s] after:ease-out ${
							isOpen
								? "after:-rotate-45 after:translate-y-0 before:translate-y-[1px] before:rotate-45 transition-all duration-[0.25s] ease-out"
								: "after:rotate-0  before:rotate-0 transition-all duration-[0.25s] ease-out"
						}`}
						ref={toggleButtonRef}
					/>
				</div>
			</motion.nav>
			<div
				className="fixed top-0 left-0 w-full h-screen flex bg-primary will-change-transform z-[999]"
				style={{
					clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
				}}
				id="overlay">
				<div className="fixed top-0 left-0 w-full h-screen flex gap-[16px] flex-col justify-center items-center text-white">
					{menuItem.map((item) => (
						<div
							key={item.id}
							className="flex cursor-pointer"
							style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
							onClick={toggleMenu}
							id="menu-item">
							<div>
								<p className="relative text-center font-BananasFont text-[10vw] leading-[82%] will-change-transform transition-all duration-[0.1s] text-black ease-linear">
									<Link
										href={item.href}
										className={`tracking-tighter hover:tracking-[5px] transition-all duration-200 ease-linear ${
											pathname === `${item.href}`
												? "text-[#DD6013] text-stroke"
												: "text-black"
										}`}>
										{item.title}
									</Link>
								</p>
							</div>
						</div>
					))}
				</div>
				<div
					className="absolute bottom-[2%] left-1/2 -translate-x-1/2 flex gap-[8px] opacity-0"
					id="sub-nav">
					{["Twitter", "Instagram", "Dribble", "Behance"].map((item, index) => (
						<div
							key={index}
							className="flex gap-2 items-center">
							<Link
								href="/"
								className="text-[20px] text-black font-BananasFont xm:text-sm sm:text-sm">
								{item}
							</Link>
							<p className="text-[#cdc6be]">.</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
