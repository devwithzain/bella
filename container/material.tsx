"use client";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TworkMaterialProps } from "@/types";

export default function Mateerial() {
	const [data, setData] = useState<TworkMaterialProps[]>([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/api/materials");
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchData();
	}, []);
	return (
		<div className="w-full py-10">
			{data.map((item) => (
				<div
					className="w-full flex justify-between gap-10 xm:flex-col-reverse sm:flex-col-reverse"
					key={item.id}>
					<div className="w-[60%] flex padding-x xm:w-full sm:w-full">
						<div className="flex items-center gap-5 flex-wrap">
							{item.images.map((img, i) => (
								<motion.div
									key={item.id}
									initial={{ opacity: 0, x: -100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										duration: 1,
										easee: "easeInOut",
										delay: i * 0.1,
										type: "spring",
									}}
									viewport={{ once: true }}
									className="w-[180px] lg:w-[150px] md:w-[150px] xm:w-[100px] sm:w-[100px] items-center justify-between gap-5">
									<Image
										src={img}
										alt="hotelImg"
										className="w-full object-cover"
										width={400}
										height={400}
									/>
								</motion.div>
							))}
						</div>
					</div>
					<div className="w-[40%] h-full flex justify-end items-end flex-col xm:w-full sm:w-full">
						<Image
							src={item.imageUrl}
							alt="hotelImg"
							className="w-[500px] object-cover xm:hidden sm:hidden"
							width={400}
							height={400}
						/>
						<h1 className="text-[30px] text-left w-full uppercase font-IBMPlex leading-tight pt-10  padding-x">
							{item.title}
						</h1>
						<h1 className="text-[20px] text-left w-full font-Poppins leading-tight  padding-x">
							{item.heading}
						</h1>
					</div>
				</div>
			))}
		</div>
	);
}
