"use client";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { TworkRenderProps } from "@/types";
import { useEffect, useState } from "react";

export default function Render() {
	const [data, setData] = useState<TworkRenderProps[]>([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/api/render");
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchData();
	}, []);

	return (
		<div className="w-full padding-x py-10">
			{data?.map((item) => (
				<div
					className="w-full h-full items-center justify-center flex flex-col gap-5"
					key={item.id}>
					<div className="w-full">
						<h1 className="text-[50px] uppercase font-IBMPlex leading-tight">
							{item.title}
						</h1>
					</div>
					<div className="w-[70%] md:w-full xm:w-full sm:w-full flex justify-between items-center gap-10 xm:flex-col sm:flex-col">
						<div className="flex-1">
							<h1 className="text-[22px] font-Poppins leading-tight text-black">
								{item.paragraph}
							</h1>
						</div>
						<div className="flex-1 flex items-end justify-end">
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
									alt="render"
									className="w-[400px] object-cover"
									width={400}
									height={400}
								/>
							</motion.div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
