"use client";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TworkImpactProps } from "@/types";

export default function Impact() {
	const [data, setData] = useState<TworkImpactProps[]>([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/api/impact");
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchData();
	}, []);

	return (
		<div className="w-full pb-10 padding-x">
			{data.map((item) => (
				<div
					className="w-full h-full items-center justify-center flex flex-col gap-10"
					key={item.id}>
					<div className="w-full flex flex-col gap-10">
						<h1 className="text-[30px] uppercase font-IBMPlex leading-tight">
							{item.title}
						</h1>
						<motion.div
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
								src={item.imageUrl}
								alt="impact"
								className="w-full h-full object-cover"
								width={1200}
								height={1200}
							/>
						</motion.div>
					</div>
					<div className="w-full flex flex-col gap-10">
						<h1 className="text-[30px] uppercase font-IBMPlex leading-tight">
							{item.heading}
						</h1>
						<div className="w-full flex items-center gap-5 xm:flex-wrap sm:flex-wrap">
							{item.images.map((img, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, x: -100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										duration: 1,
										easee: "easeInOut",
										delay: i * 0.3,
										type: "spring",
									}}
									viewport={{ once: true }}
									className="w-full items-center gap-5  xm:w-[100px] sm:w-[100px]">
									<Image
										src={img}
										alt="hotelImg"
										className="w-[200px] object-cover"
										width={200}
										height={200}
									/>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
