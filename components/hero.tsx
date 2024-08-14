"use client";
import Link from "next/link";
import Image from "next/image";
import { aboutImg } from "@/public";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";

export default function Hero() {
	const phares1 = ["Welcome To My", "Creative Journey!"];
	const phares2 = [
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
	];
	const phares3 = [
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	];

	const phares6 = ["Bella Han"];
	const phares7 = ["Product Designer"];
	const phares8 = ["Portfolio"];

	return (
		<>
			<div className="w-full flex items-center justify-center bg-[#bbb0d2] sm:hidden xm:hidden">
				<div className="w-[70%] lg:w-[60%] td:w-[60%] top-10 min-h-screen relative">
					<div className="left-0 lg:left-24 absolute origin-top-left text-center text-white text-[300px] lg:text-[180px] lg:leading-[90px] md:text-[200px] md:leading-[150px] sm:text-[100px] xm:text-[100px] font-normal font-BananasFont uppercase leading-[180px] flex flex-col gap-10 md:gap-0  td:text-[200px] td:leading-[120px]">
						{["p", "o", "r"].map((item, i) => (
							<motion.h1
								initial={{
									scale: 0,
									opacity: 0,
									y: -50,
								}}
								whileInView={{
									scale: 1,
									opacity: 1,
									y: 0,
								}}
								viewport={{ once: true }}
								transition={{ delay: i * 0.5 }}
								key={i}>
								{item}
							</motion.h1>
						))}
					</div>
					<div className="flex md:-right-24 lg:right-10 absolute bottom-[30%] right-[16%] lg:bottom-[33%] origin-bottom rotate-90 text-center text-white text-[300px] lg:text-[180px] lg:leading-[90px] md:text-[200px] md:leading-[150px] sm:text-[100px] xm:text-[100px] font-normal font-BananasFont uppercase leading-[180px] td:text-[200px] td:leading-[120px]  td:bottom-[35%] td:right-0">
						{["l", "i", "o"].map((item, i) => (
							<motion.h1
								initial={{
									scale: 0,
									opacity: 0,
									y: 0,
								}}
								whileInView={{
									scale: 1,
									opacity: 1,
									y: 0,
								}}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 2 + i * 0.5 }}
								key={i}>
								{item}
							</motion.h1>
						))}
					</div>
					<div className="flex md:mt-2 md:left-[240px] left-[240px] top-[420px] md:top-1/4 lg:top-[44%] absolute text-center text-white text-[300px] lg:text-[180px] lg:leading-[90px] md:text-[200px] md:leading-[150px] sm:text-[100px] xm:text-[100px] font-normal font-BananasFont uppercase leading-[221.25px]  td:text-[200px] td:leading-[120px] td:top-[44%] td:left-[150px] td:ml-5">
						{["t", "f", "o"].map((item, i) => (
							<motion.h1
								initial={{
									scale: 0,
									opacity: 0,
									x: -50,
								}}
								whileInView={{
									scale: 1,
									opacity: 1,
									x: 0,
								}}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 1 + i * 0.5 }}
								key={i}>
								{item}
							</motion.h1>
						))}
					</div>
				</div>
			</div>
			<div className="w-full h-[60vh] padding-x hidden flex-col justify-center gap-5 sm:flex xm:flex bg-[#bbb0d2]">
				<h1 className="text-primary text-[50px] font-semibold font-BananasFont leading-none">
					<TextMask>{phares6}</TextMask>
				</h1>
				<div className="flex flex-col gap-5">
					<h1 className="text-primary text-[50px] font-semibold font-BananasFont leading-none">
						<TextMask>{phares7}</TextMask>
					</h1>
					<h1 className="text-primary text-[50px] font-semibold font-BananasFont leading-none">
						<TextMask>{phares8}</TextMask>
					</h1>
				</div>
			</div>
			<div className="w-full flex items-center justify-between gap-5 py-5 padding-x bg-[#F4F4F4]">
				<div>
					<Link
						href="/"
						className={`text-[25px] xm:text-[16px] sm:text-[10px] text-black font-bold font-Poppins tracking-tighter hover:tracking-[5px] transition-all duration-200 ease-linear `}>
						Home
					</Link>
				</div>
				<div className="flex items-center gap-5">
					<div className="">
						<Link
							href="/work"
							className={`text-[25px] xm:text-[16px] sm:text-[10px] text-black font-bold font-Poppins tracking-tighter hover:tracking-[5px] transition-all duration-200 ease-linear `}>
							Work
						</Link>
					</div>
					<div className="">
						<Link
							href="/contact"
							className={`text-[25px] xm:text-[16px] sm:text-[10px] text-black font-bold font-Poppins tracking-tighter hover:tracking-[5px] transition-all duration-200 ease-linear `}>
							Contact
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-between gap-5 bg-[#F4F4F4] items-center padding-x py-20 xm:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true }}
					className="flex flex-1 items-center justify-center">
					<Image
						src={aboutImg}
						alt="aboutImg"
						width={800}
						height={400}
						className="w-[80%] h-[80%] object-cover"
					/>
				</motion.div>
				<div className="flex flex-1">
					<div className="flex flex-col gap-5">
						<div>
							<h1 className="text-black text-[95px] td:text-[50px] lg:text-[65px] md:text-[40px] sm:text-[30px] xm:text-[30px] font-semibold font-Poppins leading-none">
								<TextMask>{phares1}</TextMask>
							</h1>
						</div>
						<div className="flex flex-col gap-5">
							<p className="text-black text-[24px] td:text-[16px] lg:text-[20px] xm:text-[18px] sm:text-[18px] leading-[36px] font-normal font-Poppins">
								<TextMask>{phares2}</TextMask>
							</p>
							<p className="text-black text-[24px] td:text-[16px] lg:text-[20px] xm:text-[18px] sm:text-[18px] leading-[36px] font-normal font-Poppins">
								<TextMask>{phares3}</TextMask>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
