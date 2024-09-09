"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TpageAboutProps } from "@/types";
import { useEffect, useState } from "react";

export default function Hero() {
	const [data, setData] = useState<TpageAboutProps[]>([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/api/about");
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchData();
	}, []);

	return (
		<>
			<div className="w-full h-screen padding-x sm:h-[50vh] xm:h-[50vh] bg-[#bbb0d2] flex items-center justify-center">
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
			{data.map((item) => (
				<div
					className="w-full flex justify-between gap-5 bg-[#F4F4F4] items-center padding-x py-20 xm:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse mht:flex-col-reverse"
					key={item.id}>
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						viewport={{ once: true }}
						className="flex w-1/2 items-center justify-center xm:w-full sm:w-full">
						<Image
							src={item.imageUrl}
							alt="aboutImg"
							width={800}
							height={400}
							className="w-[80%] xm:w-full sm:w-full object-cover"
						/>
					</motion.div>
					<div className="flex w-1/2	 xm:w-full sm:w-full">
						<div className="flex flex-col gap-5">
							<div>
								<h1 className="text-black text-[85px] mht:text-[60px] td:text-[50px] lg:text-[65px] md:text-[50px] sm:text-[30px] xm:text-[30px] font-semibold font-Poppins leading-tight">
									{item.title}
								</h1>
							</div>
							<div className="flex flex-col gap-5">
								<p className="text-black text-[24px] td:text-[16px] lg:text-[20px] xm:text-[18px] sm:text-[18px] mht:text-[16px] leading-tight font-normal font-Poppins">
									{item.paragraph1}
								</p>
								<p className="text-black text-[24px] td:text-[16px] lg:text-[20px] xm:text-[18px] mht:text-[16px] leading-tight font-normal font-Poppins">
									{item.paragraph2}
								</p>
								<p className="text-black text-[24px] td:text-[16px] lg:text-[20px] xm:text-[18px] mht:text-[16px] leading-tight font-normal font-Poppins">
									{item.paragraph3}
								</p>
								<p className="text-black text-[24px] td:text-[16px] lg:text-[20px] xm:text-[18px] mht:text-[16px] leading-tight font-normal font-Poppins">
									{item.paragraph4}
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
