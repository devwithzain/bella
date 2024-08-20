"use client";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TworkLifeCycleProps } from "@/types";

export default function LifeCycle() {
	const [data, setData] = useState<TworkLifeCycleProps[]>([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/api/lifecycle");
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchData();
	}, []);
	return (
		<div className="w-full py-10 padding-x">
			{data.map((item) => (
				<motion.div
					key={item.id}
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 1,
						easee: "easeInOut",
						type: "spring",
					}}
					viewport={{ once: true }}
					className="w-full h-full">
					<Image
						src={item.imageUrl}
						alt="lifeCycleImg"
						className="w-full h-full object-cover"
						width={1200}
						height={1200}
					/>
				</motion.div>
			))}
		</div>
	);
}
