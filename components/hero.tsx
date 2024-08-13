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
	const phares4 = ["Product Designer"];
	const phares5 = ["Bella Han"];

	const phares6 = ["Bella Han"];
	const phares7 = ["Product Designer"];
	const phares8 = ["Portfolio"];

	return (
		<>
			<div className="w-full flex items-center justify-center bg-[#bbb0d2] sm:hidden xm:hidden">
				<div className="w-[1235px] h-[1175.61px] relative">
					<div className="w-[768.25px] h-[257.79px] left-[257.79px] top-0 absolute origin-top-left rotate-90 text-center text-white text-[354.01px] lg:text-[300px] md:text-[250px] sm:text-[100px] xm:text-[100px] font-normal font-BananasFont uppercase leading-[221.25px]">
						Por
					</div>
					<div className="w-[768.25px] h-[257.79px] left-[1235px] top-[407.36px] absolute origin-top-left rotate-90 text-center text-white text-[354.01px] lg:text-[300px] md:text-[250px] sm:text-[100px] xm:text-[100px] font-normal font-BananasFont uppercase leading-[221.25px]">
						lio
					</div>
					<div className="w-[768.25px] h-[257.79px] left-[237.23px] top-[510.11px] absolute text-center text-white text-[354.01px] lg:text-[300px] md:text-[250px] sm:text-[100px] xm:text-[100px] font-normal font-BananasFont uppercase leading-[221.25px]">
						tfo
					</div>
					<div className="left-[579px] top-[400px] absolute text-center text-black text-[82.81px] font-normal font-PlayfairDisplay leading-[100px]">
						<TextMask>{phares4}</TextMask>
					</div>
					<div className="left-[83px] top-[759.36px] absolute text-center text-black text-[82.81px] font-normal font-PlayfairDisplay leading-[100px]">
						<TextMask>{phares5}</TextMask>
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
			<div className="w-full flex items-center justify-between gap-5 py-5 padding-x bg-white">
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
			<div className="w-full flex justify-between gap-5 bg-white items-center padding-x py-20 xm:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse">
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
							<h1 className="text-black text-[95px] lg:text-[80px] md:text-[60px] sm:text-[30px] xm:text-[30px] font-semibold font-Poppins leading-none">
								<TextMask>{phares1}</TextMask>
							</h1>
						</div>
						<div className="flex flex-col gap-5">
							<p className="text-black text-[24px] xm:text-[18px] sm:text-[18px] leading-[36px] font-normal font-Poppins">
								<TextMask>{phares2}</TextMask>
							</p>
							<p className="text-black text-[24px] xm:text-[18px] sm:text-[18px] leading-[36px] font-normal font-Poppins">
								<TextMask>{phares3}</TextMask>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
