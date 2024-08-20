"use client";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { TworkModalProps } from "@/types";
import { useEffect, useState } from "react";

export default function Modals() {
	const [data, setData] = useState<TworkModalProps[]>([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/api/modal");
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
					className="w-full items-center justify-center flex flex-col gap-5 xm:flex-col sm:flex-col"
					key={item.id}>
					<div className="w-full">
						<h1 className="text-[50px] uppercase font-IBMPlex leading-tight">
							{item.title}
						</h1>
					</div>

					<div className="w-full flex gap-10 md:flex-col xm:flex-col sm:flex-col">
						<div className="flex-1 md:flex">
							{item.images.slice(0, 1).map((img, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, x: -200 }}
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
										alt="modal1"
										className="w-full object-cover"
										width={400}
										height={400}
									/>
								</motion.div>
							))}
							{item.images.slice(1, 2).map((img, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, x: -200 }}
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
										alt="modal1"
										className="w-full object-cover"
										width={400}
										height={400}
									/>
								</motion.div>
							))}
						</div>
						<div className="flex-1 flex justify-around items-center">
							{item.images.slice(2, 3).map((img, i) => (
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
										alt="modal1"
										className="w-[100px] object-cover"
										width={400}
										height={400}
									/>
								</motion.div>
							))}
							{item.images.slice(3).map((img, i) => (
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
										alt="modal1"
										className="w-[300px] object-cover"
										width={400}
										height={400}
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
