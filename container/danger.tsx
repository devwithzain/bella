"use client";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { TworkDangerProps } from "@/types";
import { useEffect, useState } from "react";
import { workDangerAnimation1, workDangerAnimation2 } from "@/motion";

export default function Danger() {
	const [data, setData] = useState<TworkDangerProps[]>([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/api/danger");
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchData();
	}, []);
	return (
		<div className="w-full padding-x py-10">
			{data?.map((item, i) => (
				<div
					className="w-full h-full flex items-end justify-center gap-10 md:flex-wrap md:items-start md:justify-start xm:flex-col sm:flex-col xm:items-start sm:items-start"
					key={i}>
					<div className="flex gap-5 items-center xm:w-full sm:w-full xm:gap-0 sm:gap-0">
						{item.images.slice(0, 1).map((img, i) => (
							<motion.div
								key={i}
								className="xm:hidden sm:hidden"
								variants={workDangerAnimation1}
								initial="initial"
								whileInView="enter"
								viewport={{ once: true }}>
								<Image
									src={img}
									alt="danger"
									className="w-[120px]"
									width={800}
									height={400}
								/>
							</motion.div>
						))}

						<div className="flex flex-col gap-2 xm:w-full sm:w-full">
							<div className="flex justify-between items-center gap-10">
								<motion.div
									variants={workDangerAnimation1}
									initial="initial"
									whileInView="enter"
									viewport={{ once: true }}
									className="flex flex-1 flex-col">
									<h1 className="text-[50px] lg:text-[30px] md:text-[30px] xm:text-[25px] sm:text-[25px] font-IBMPlex leading-tight">
										{item.title1}
									</h1>
									<p className="text-[18px] lg:text-[16px] xm:text-[16px] sm:text-[16px] font-Poppins leading-tight">
										{item.paragraph1}
									</p>
								</motion.div>
								<motion.div
									variants={workDangerAnimation1}
									initial="initial"
									whileInView="enter"
									viewport={{ once: true }}
									className="flex flex-1">
									<div className="w-[150px] h-[150px] rounded-full bg-gray-300 text-center text-black flex items-center justify-center relative">
										Plastic: Polypropylene Polyethylene
										<div className="w-[70px] h-[70px] rounded-full bg-black text-white flex items-center justify-center absolute -top-8 left-[35px]">
											Other
										</div>
									</div>
								</motion.div>
							</div>
							<div className="flex justify-between items-center gap-10">
								<motion.div
									variants={workDangerAnimation2}
									initial="initial"
									whileInView="enter"
									viewport={{ once: true }}
									className="flex flex-1 flex-col">
									<h1 className="text-[50px] lg:text-[30px] md:text-[30px] xm:text-[25px] sm:text-[25px] font-IBMPlex leading-tight">
										{item.title2}
									</h1>
									<p className="text-[18px] lg:text-[16px] xm:text-[16px] sm:text-[16px] font-Poppins leading-tight">
										{item.paragraph2}
									</p>
								</motion.div>
								{item.images.slice(1, 2).map((img, i) => (
									<motion.div
										key={i}
										variants={workDangerAnimation1}
										initial="initial"
										whileInView="enter"
										viewport={{ once: true }}
										className="w-fit">
										<Image
											src={img}
											alt="danger"
											className="w-[100px]"
											width={100}
											height={100}
										/>
									</motion.div>
								))}
							</div>
							<div className="flex justify-between items-center gap-10">
								<motion.div
									variants={workDangerAnimation2}
									initial="initial"
									whileInView="enter"
									viewport={{ once: true }}
									className="flex flex-1 flex-col">
									<h1 className="text-[50px] lg:text-[30px] md:text-[30px] xm:text-[25px] sm:text-[25px] font-IBMPlex leading-tight">
										{item.title3}
									</h1>
									<p className="text-[18px] lg:text-[16px] xm:text-[16px] sm:text-[16px] font-Poppins leading-tight">
										{item.paragraph3}
									</p>
								</motion.div>
								{item.images.slice(2, 3).map((img, i) => (
									<motion.div
										key={i}
										variants={workDangerAnimation1}
										initial="initial"
										whileInView="enter"
										className="w-fit"
										viewport={{ once: true }}>
										<Image
											src={img}
											alt="danger"
											className="w-[100px]"
											width={100}
											height={100}
										/>
									</motion.div>
								))}
							</div>
						</div>
					</div>
					<div className="flex items-center xm:w-full sm:w-full gap-5 xm:gap-0 sm:gap-0">
						{item.images.slice(3, 4).map((img, i) => (
							<motion.div
								key={i}
								variants={workDangerAnimation1}
								initial="initial"
								whileInView="enter"
								viewport={{ once: true }}>
								<Image
									src={img}
									alt="danger"
									className="w-[250px] h-full xm:hidden sm:hidden"
									width={800}
									height={400}
								/>
							</motion.div>
						))}
						<div className="flex flex-col gap-2 xm:w-full sm:w-full">
							<div className="flex justify-between items-center gap-10">
								<motion.div
									variants={workDangerAnimation2}
									initial="initial"
									whileInView="enter"
									viewport={{ once: true }}
									className="flex flex-1 flex-col">
									<h1 className="text-[50px] lg:text-[30px] md:text-[30px] xm:text-[25px] sm:text-[25px] font-IBMPlex leading-tight">
										{item.title4}
									</h1>
									<p className="text-[18px] lg:text-[16px] xm:text-[16px] sm:text-[16px] font-Poppins leading-tight">
										{item.paragraph4}
									</p>
								</motion.div>
								{item.images.slice(4, 5).map((img, i) => (
									<motion.div
										key={i}
										variants={workDangerAnimation1}
										initial="initial"
										whileInView="enter"
										viewport={{ once: true }}
										className="flex flex-1">
										<Image
											src={img}
											alt="danger"
											className="w-[100px]"
											width={100}
											height={100}
										/>
									</motion.div>
								))}
							</div>
							<div className="flex justify-between items-center gap-10">
								<motion.div
									variants={workDangerAnimation2}
									initial="initial"
									whileInView="enter"
									viewport={{ once: true }}
									className="flex flex-1">
									<p className="text-[18px] lg:text-[16px] xm:text-[16px] sm:text-[16px] font-Poppins leading-tight">
										{item.paragraph5}
									</p>
								</motion.div>
								{item.images.slice(5, 6).map((img, i) => (
									<motion.div
										key={i}
										variants={workDangerAnimation1}
										initial="initial"
										whileInView="enter"
										viewport={{ once: true }}
										className="flex flex-1">
										<Image
											src={img}
											alt="danger"
											className="w-[100px]"
											width={100}
											height={100}
										/>
									</motion.div>
								))}
							</div>
						</div>
					</div>
					<div className="flex items-center xm:w-full sm:w-full gap-5 xm:gap-0 sm:gap-0">
						{item.images.slice(6, 7).map((img, i) => (
							<motion.div
								key={i}
								variants={workDangerAnimation1}
								initial="initial"
								whileInView="enter"
								viewport={{ once: true }}>
								<Image
									src={img}
									alt="danger"
									className="w-[150px] xm:hidden sm:hidden"
									width={800}
									height={400}
								/>
							</motion.div>
						))}
						<div className="flex flex-col gap-2 xm:w-full sm:w-full">
							<div className="flex justify-between items-center gap-10">
								<motion.div
									variants={workDangerAnimation2}
									initial="initial"
									whileInView="enter"
									viewport={{ once: true }}
									className="flex flex-1">
									<p className="text-[18px] lg:text-[16px] xm:text-[16px] sm:text-[16px] font-Poppins leading-tight">
										{item.paragraph6}
									</p>
								</motion.div>
								{item.images.slice(7).map((img, i) => (
									<motion.div
										key={i}
										variants={workDangerAnimation1}
										initial="initial"
										whileInView="enter"
										viewport={{ once: true }}
										className="flex flex-1">
										<Image
											src={img}
											alt="danger"
											className="w-[100px]"
											width={100}
											height={100}
										/>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
