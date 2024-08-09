"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { eyesvg, heroImg } from "@/public";
import { TextMarquee, TextMask } from "@/animations";

export default function Hero() {
	const phares1 = ["Han"];
	const phares = ["Bella"];
	return (
		<div className="w-full h-screen padding-x">
			<div className="w-full h-full flex items-center justify-center flex-col gap-5">
				<div className="flex items-center gap-3">
					<h1 className="text-[#141313] text-[288px] lg:text-[200px] md:text-[150px] xm:text-[80px] sm:text-[80px] font-normal uppercase leading-[220px] lg:leading-[180px] md:leading-none xm:leading-none sm:leading-none font-BananasFont">
						<TextMask>{phares}</TextMask>
					</h1>
					<motion.div
						initial={{ scale: 0, opacity: 0, y: "-100%" }}
						whileInView={{ scale: 1, opacity: 1, y: "0%" }}
						transition={{ duration: 1, ease: "easeInOut" }}
						viewport={{ once: true }}>
						<Image
							src={heroImg}
							alt="heroImg"
							width={250}
							height={250}
							className="xm:w-20 sm:w-20"
						/>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, x: "-100%" }}
					whileInView={{ opacity: 1, x: "0%" }}
					transition={{ duration: 1, ease: "easeInOut" }}
					viewport={{ once: true }}
					className="w-[50%] rounded-full bg-black xm:w-full sm:w-full">
					<TextMarquee baseVelocity={1}>
						<h1 className="text-primary uppercase text-[30px] font-semibold flex ">
							<span className="mx-[20px] w-[40px] h-[40px]">
								<Image
									src={eyesvg}
									alt="eyesvg"
									width={100}
									height={100}
									className="w-full object-cover h-full"
								/>
							</span>
							Creative Direction
						</h1>
						<h1 className="text-primary uppercase text-[30px] font-semibold flex items-center justify-center">
							<span className="mx-[20px] w-[40px] h-[40px]">
								<Image
									src={eyesvg}
									alt="eyesvg"
									width={100}
									height={100}
									className="w-full object-cover h-full"
								/>
							</span>
							GRAPHIC Design
						</h1>
						<h1 className="text-primary uppercase text-[30px] font-semibold flex items-center justify-center">
							<span className="mx-[20px] w-[40px] h-[40px]">
								<Image
									src={eyesvg}
									alt="eyesvg"
									width={100}
									height={100}
									className="w-full object-cover h-full"
								/>
							</span>
							ART DIRECTION
						</h1>
						<h1 className="text-primary uppercase text-[30px] font-semibold flex items-center justify-center">
							<span className="mx-[20px] w-[40px] h-[40px]">
								<Image
									src={eyesvg}
									alt="eyesvg"
									width={100}
									height={100}
									className="w-full object-cover h-full"
								/>
							</span>
							Strategic thinker
						</h1>
						<h1 className="text-primary uppercase text-[30px] font-semibold flex items-center justify-center">
							<span className="mx-[20px] w-[40px] h-[40px]">
								<Image
									src={eyesvg}
									alt="eyesvg"
									width={100}
									height={100}
									className="w-full object-cover h-full"
								/>
							</span>
							Creative Problem Solver
						</h1>
					</TextMarquee>
				</motion.div>
				<div>
					<h1 className="text-[#141313] text-[288px] lg:text-[200px] md:text-[150px] xm:text-[80px] sm:text-[80px] font-normal uppercase leading-[220px] lg:leading-[180px] md:leading-none xm:leading-none sm:leading-none font-BananasFont">
						<TextMask>{phares1}</TextMask>
					</h1>
				</div>
			</div>
		</div>
	);
}
