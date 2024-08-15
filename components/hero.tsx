"use client";
import Link from "next/link";
import Image from "next/image";
import { aboutImg } from "@/public";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";

export default function Hero() {
	const phares1 = ["Welcome To My", "Creative Journey!"];
	const phares2 = [
		"Hi, I'm Bella! I graduated from Parsons School of Design with a major in Product Design and a minor in Communication Design. My curiosity about how things work has been a driving force behind my passion for creating and innovating new objects.",
	];
	const phares3 = [
		"I thrive on the challenge of taking abstract ideas and transforming them into tangible, finished products that people can use and enjoy. Whether it's experimenting with different materials, exploring new design techniques, or collaborating with others, I'm always eager to push the boundaries of what's possible in design.",
	];
	const phares4 = [
		"Design, for me, is more than just a career—it's a journey of continuous learning and growth. I'm constantly seeking new challenges and opportunities to expand my skills and bring fresh, exciting ideas to life.",
	];
	const phares5 = [
		"Thank you for visiting my page, and I look forward to connecting with you!",
	];

	return (
		<>
			<div className="w-full h-screen bg-[#bbb0d2] flex items-center justify-center">
				<div className="flex flex-col gap-2">
					<div className="w-fit h-fit items-start justify-start flex flex-col gap-2">
						<div className="w-fit">
							<motion.div
								initial={{
									width: 0,
									opacity: 0,
								}}
								whileInView={{
									width: "auto",
									opacity: 1,
								}}
								transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
								viewport={{ once: true }}
								className="flex flex-col gap-2">
								<Image
									src={"/p.png"}
									alt="a"
									width={200}
									height={200}
									className="heroImg"
								/>
							</motion.div>
						</div>
						<div className="w-fit">
							<motion.div
								initial={{
									width: 0,
									opacity: 0,
								}}
								whileInView={{
									width: "auto",
									opacity: 1,
								}}
								transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
								viewport={{ once: true }}
								className="flex flex-col gap-2">
								<Image
									src={"/o.png"}
									alt="a"
									width={200}
									height={200}
									className="heroImg"
								/>
							</motion.div>
						</div>
					</div>
					<div className="flex gap-2">
						<div className="w-fit flex gap-2 h-fit items-start justify-start">
							<div className="w-fit">
								<motion.div
									initial={{
										width: 0,
										opacity: 0,
									}}
									whileInView={{
										width: "auto",
										opacity: 1,
									}}
									transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
									viewport={{ once: true }}
									className="flex flex-col gap-2">
									<Image
										src={"/r.png"}
										alt="a"
										width={200}
										height={200}
										className="heroImg"
									/>
								</motion.div>
							</div>
							<div className="w-fit">
								<motion.div
									initial={{
										width: 0,
										opacity: 0,
									}}
									whileInView={{
										width: "auto",
										opacity: 1,
									}}
									transition={{ duration: 0.5, delay: 2.5, ease: "easeInOut" }}
									viewport={{ once: true }}
									className="flex flex-col gap-2">
									<Image
										src={"/t.png"}
										alt="a"
										width={180}
										height={180}
										className="heroImg"
									/>
								</motion.div>
							</div>
							<div className="w-fit">
								<motion.div
									initial={{
										width: 0,
										opacity: 0,
									}}
									whileInView={{
										width: "auto",
										opacity: 1,
									}}
									transition={{ duration: 0.5, delay: 3, ease: "easeInOut" }}
									viewport={{ once: true }}
									className="flex flex-col gap-2">
									<Image
										src={"/f.png"}
										alt="a"
										width={200}
										height={200}
										className="heroImg"
									/>
								</motion.div>
							</div>
							<div className="w-fit">
								<motion.div
									initial={{
										width: 0,
										opacity: 0,
									}}
									whileInView={{
										width: "auto",
										opacity: 1,
									}}
									transition={{ duration: 0.5, delay: 3.5, ease: "easeInOut" }}
									viewport={{ once: true }}
									className="flex flex-col gap-2">
									<Image
										src={"/o.png"}
										alt="a"
										width={200}
										height={200}
										className="heroImg"
									/>
								</motion.div>
							</div>
						</div>
						<div className="w-fit flex flex-col gap-2 h-fit items-center justify-center">
							<div className="w-fit">
								<motion.div
									initial={{
										width: 0,
										opacity: 0,
									}}
									whileInView={{
										width: "auto",
										opacity: 1,
									}}
									transition={{ duration: 0.5, delay: 4, ease: "easeInOut" }}
									viewport={{ once: true }}
									className="flex flex-col gap-2">
									<Image
										src={"/l.png"}
										alt="a"
										width={200}
										height={200}
										className="heroImg"
									/>
								</motion.div>
							</div>
							<div className="w-fit">
								<motion.div
									initial={{
										width: 0,
										opacity: 0,
									}}
									whileInView={{
										width: "auto",
										opacity: 1,
									}}
									transition={{ duration: 0.5, delay: 4.5, ease: "easeInOut" }}
									viewport={{ once: true }}
									className="flex flex-col gap-2">
									<Image
										src={"/i.png"}
										alt="a"
										width={200}
										height={200}
										className="heroImg"
									/>
								</motion.div>
							</div>
							<div className="w-fit">
								<motion.div
									initial={{
										width: 0,
										opacity: 0,
									}}
									whileInView={{
										width: "auto",
										opacity: 1,
									}}
									transition={{ duration: 0.5, delay: 5, ease: "easeInOut" }}
									viewport={{ once: true }}
									className="flex flex-col gap-2">
									<Image
										src={"/o.png"}
										alt="a"
										width={200}
										height={200}
										className="heroImg"
									/>
								</motion.div>
							</div>
						</div>
					</div>
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
							<h1 className="text-black text-[95px] td:text-[50px] lg:text-[65px] md:text-[40px] mht:text-[30px] sm:text-[30px] xm:text-[30px] font-semibold font-Poppins leading-tight">
								<TextMask>{phares1}</TextMask>
							</h1>
						</div>
						<div className="flex flex-col gap-5">
							<p className="text-black text-[24px] td:text-[16px] lg:text-[20px] xm:text-[18px] sm:text-[18px] mht:text-[16px] leading-tight font-normal font-Poppins">
								<TextMask>{phares2}</TextMask>
							</p>
							<p className="text-black text-[24px] td:text-[16px] lg:text-[20px] xm:text-[18px] mht:text-[16px] leading-tight font-normal font-Poppins">
								<TextMask>{phares3}</TextMask>
							</p>
							<p className="text-black text-[24px] td:text-[16px] lg:text-[20px] xm:text-[18px] mht:text-[16px] leading-tight font-normal font-Poppins">
								<TextMask>{phares4}</TextMask>
							</p>
							<p className="text-black text-[24px] td:text-[16px] lg:text-[20px] xm:text-[18px] mht:text-[16px] leading-tight font-normal font-Poppins">
								<TextMask>{phares5}</TextMask>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
