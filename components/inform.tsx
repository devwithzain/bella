"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

export default function Information() {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-49%"]);

	return (
		<section
			ref={targetRef}
			className="relative h-[300vh] bg-[#1F201D]">
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				<motion.div
					style={{ x }}
					className="flex h-full">
					<div className="h-full w-[1000px] relative bg-[#1F201D]">
						<div className="w-full h-full absolute inset-0 z-10 flex items-start flex-col border-l border-[#867D71] p-14 gap-6">
							<div className="w-full flex items-center justify-between gap-2">
								<h1 className="text-[80px] font-BananasFont uppercase text-[#DBCAB6]">
									sfds
								</h1>
								<Image
									src={"item.src"}
									alt="seamless"
									width={100}
									height={100}
								/>
							</div>
							<h1 className="text-[60px] font-BananasFont uppercase text-[#DBCAB6] leading-none">
								Seamless, <br /> Responsive <br /> Supply Chain and <br />
								Distribution <br />
								Network
							</h1>
							<h1 className="text-[60px] font-BananasFont uppercase text-[#DBCAB6] leading-none">
								Elevating <br /> Everyday <br /> Products with <br /> Renewable
								<br /> Materials
							</h1>
							<h1 className="text-[60px] font-BananasFont uppercase text-[#DBCAB6] leading-none">
								About <br /> MeAward-Winning <br /> INNOVATION
							</h1>
							<p className="text-[18px] font-Poppins text-[#867D71]">
								{"item.para"}
							</p>
							<button className="text-[16px] font-Poppins text-[#DD6013]">
								{"item.btn"}
							</button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
