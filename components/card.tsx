"use client";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { TpageSkillsProps } from "@/types";
import { useEffect, useState } from "react";

export default function Card() {
	const [data, setData] = useState<TpageSkillsProps[]>([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/api/skills");
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchData();
	}, []);
	return (
		<>
			{data?.map((item) => (
				<div
					className="h-full w-full relative shrink-0"
					key={item.id}>
					<div className="w-full h-full absolute inset-0 z-10 flex justify-between">
						<div className="w-full h-full flex items-center justify-between">
							<div className="w-full h-full items-end p-10 flex flex-1">
								<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
									{item.title}
								</h1>
							</div>
							<div className="w-full h-full p-10 flex justify-center flex-1 items-center">
								{item.images.slice(0, 1).map((img, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, scale: 0.5 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5, ease: "easeInOut" }}
										viewport={{ once: true }}
										className="w-[350px] h-[350px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
										<Image
											className="lg:w-[100px] td:h-[80px] lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
											src={img}
											alt="Image"
											width={150}
											height={150}
										/>
									</motion.div>
								))}
							</div>
							<div className="w-full h-full p-10 flex flex-1 items-start">
								<div className="flex flex-col items-center relative z-[99]">
									<h1 className="text-[#2E2E2E]/10 text-[200px] mdd:text-[120px] tracking-tighter  td:text-[60px] lg:text-[80px] mht:text-[60px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-tight">
										{item.skillNo1}
									</h1>
									<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
										{item.heading1}
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
			{data?.map((item) => (
				<div
					className="w-[50%] h-full flex-col flex items-center justify-between shrink-0 "
					key={item.id}>
					<div className="w-full h-full flex items-center justify-center flex-col">
						<div className="flex flex-col items-center relative z-[99]">
							<h1 className="text-[#2E2E2E]/10 text-[200px] mdd:text-[120px] tracking-tighter  td:text-[60px] lg:text-[80px] mht:text-[60px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-tight">
								{item.skillNo2}
							</h1>
							<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
								{item.heading2}
							</h1>
						</div>
						{item.images.slice(1, 2).map((img, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
								viewport={{ once: true }}
								className="w-[350px] h-[350px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
								<Image
									className="lg:w-[100px] td:h-[80px] lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
									src={img}
									alt="Image"
									width={200}
									height={200}
								/>
							</motion.div>
						))}
					</div>
				</div>
			))}
			{data?.map((item) => (
				<div
					className="w-[50%] h-full flex-col flex items-center justify-between shrink-0"
					key={item.id}>
					<div className="w-full h-full flex items-center justify-center flex-col">
						{item.images.slice(2, 3).map((img, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
								viewport={{ once: true }}
								className="w-[350px] h-[350px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
								<Image
									className="lg:w-[100px] td:h-[80px] lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
									src={img}
									alt="Image"
									width={200}
									height={200}
								/>
							</motion.div>
						))}
						<div className="flex flex-col items-center relative z-[99]">
							<h1 className="text-[#2E2E2E]/10 text-[200px] mdd:text-[120px] tracking-tighter xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-tight">
								{item.skillNo3}
							</h1>
							<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
								{item.heading3}
							</h1>
						</div>
					</div>
				</div>
			))}
			{data?.map((item) => (
				<div
					className="w-[50%] h-full flex-col flex items-center justify-between shrink-0"
					key={item.id}>
					<div className="w-full h-full flex items-center justify-center flex-col">
						<div className="flex flex-col items-center relative z-[99]">
							<h1 className="text-[#2E2E2E]/10 text-[200px] mdd:text-[120px] tracking-tighter  td:text-[60px] lg:text-[80px] mht:text-[60px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-tight">
								{item.skillNo4}
							</h1>
							<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
								{item.heading4}
							</h1>
						</div>
						{item.images.slice(3, 4).map((img, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
								viewport={{ once: true }}
								className="w-[350px] h-[350px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
								<Image
									className="lg:w-[100px] td:h-[80px] lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
									src={img}
									alt="Image"
									width={200}
									height={200}
								/>
							</motion.div>
						))}
					</div>
				</div>
			))}
			{data?.map((item) => (
				<div
					className="w-[50%] h-full flex-col flex items-center justify-between shrink-0"
					key={item.id}>
					<div className="w-full h-full flex items-center justify-center flex-col">
						{item.images.slice(4).map((img, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
								viewport={{ once: true }}
								className="w-[350px] h-[350px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
								<Image
									className="lg:w-[100px] td:h-[80px] lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
									src={img}
									alt="Image"
									width={200}
									height={200}
								/>
							</motion.div>
						))}
						<div className="flex flex-col items-center relative z-[99]">
							<h1 className="text-[#2E2E2E]/10 text-[200px] mdd:text-[120px] tracking-tighter  td:text-[60px] lg:text-[80px] mht:text-[60px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-tight">
								{item.skillNo5}
							</h1>
							<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
								{item.heading5}
							</h1>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
