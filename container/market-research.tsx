"use client";
import Image from "next/image";
import {
	hotel1,
	hotel2,
	hotel3,
	hotel4,
	hotel5,
	hotel6,
	hotelGraph,
	hotelImg,
} from "@/public";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { TworkResearchProps } from "@/types";

export default function MarketRearch() {
	const [data, setData] = useState<TworkResearchProps[]>([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/api/research");
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchData();
	}, []);

	return (
		<div className="w-full padding-x py-10">
			{data.map((item) => (
				<div
					className="w-full h-full justify-between flex gap-5"
					key={item.id}>
					<div className="w-full flex flex-col gap-6">
						<h1 className="text-[70px] lg:text-[50px] md:text-[40px] xm:text-[30px] sm:text-[30px] uppercase font-IBMPlex leading-tight">
							{item.title}
						</h1>
						<div className="flex flex-col gap-6">
							<h1 className="text-[25px] uppercase font-IBMPlex leading-tight">
								{item.heading}
							</h1>
							<div className="w-full flex xm:flex-wrap sm:flex-wrap justify-between gap-4">
								{item.images.slice(0, 6).map((img, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, x: -100 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{
											duration: 1,
											easee: "easeInOut",
											delay: i * 0.2,
											type: "spring",
										}}
										viewport={{ once: true }}
										className="w-[75%] flex items-end xm:w-[100px] sm:w-[100px]">
										<Image
											src={img}
											alt="hotelImg"
											className="w-[80px] h-full"
											width={100}
											height={100}
										/>
									</motion.div>
								))}
							</div>
						</div>
					</div>
					<div className="w-full h-full flex flex-col-reverse justify-center items-center gap-10 xm:hidden sm:hidden">
						{item.images.slice(6, 7).map((img, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: 200 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									delay: 0.8,
									type: "spring",
								}}
								viewport={{ once: true }}>
								<Image
									src={img}
									alt="hotelImg"
									className="w-full h-[150px] object-cover"
									width={1000}
									height={600}
								/>
							</motion.div>
						))}
						{item.images.slice(7).map((img, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: 200 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									delay: 0.8,
									type: "spring",
								}}
								viewport={{ once: true }}
								className="w-full flex items-center justify-center">
								<Image
									src={img}
									alt="hotelGraph"
									className="w-[50%] object-cover"
									width={600}
									height={600}
								/>
							</motion.div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
