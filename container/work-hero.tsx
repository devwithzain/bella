"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TworkHeroProps } from "@/types";

export default function WorkHero() {
	const [data, setData] = useState<TworkHeroProps[]>([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/api/hero");
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchData();
	}, []);
	return (
		<div className="w-full min-h-screen padding-x relative">
			<div className="w-full flex items-center justify-between gap-5 py-5 absolute left-0 padding-x top-0">
				<div>
					<Link
						href="/"
						className={`text-[25px] xm:text-[16px] sm:text-[16px] text-black font-bold font-Poppins tracking-tighter hover:tracking-[5px] transition-all duration-200 ease-linear`}>
						Home
					</Link>
				</div>
				<div className="flex items-center gap-5">
					<div>
						<Link
							href="/work"
							className={`text-[25px] xm:text-[16px] sm:text-[16px] text-black font-bold font-Poppins tracking-tighter hover:tracking-[5px] transition-all duration-200 ease-linear`}>
							Work
						</Link>
					</div>
					<div>
						<Link
							href="/contact"
							className={`text-[25px] xm:text-[16px] sm:text-[16px] text-black font-bold font-Poppins tracking-tighter hover:tracking-[5px] transition-all duration-200 ease-linear`}>
							Contact
						</Link>
					</div>
				</div>
			</div>
			{data?.map((item) => (
				<div
					className="w-full h-full items-center justify-center flex flex-col gap-5 pt-20"
					key={item.id}>
					<div className="w-full overflow-hidden">
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, ease: "easeInOut" }}
							viewport={{ once: true }}
							className="w-full">
							<h1 className="text-[150px] lg:text-[100px] md:text-[70px] xm:text-[50px] sm:text-[50px] uppercase font-IBMPlex leading-tight">
								{item.title}
							</h1>
						</motion.div>
					</div>

					<div className="w-full h-full flex justify-between gap-10 lg:flex-col md:flex-col xm:flex-col sm:flex-col">
						<motion.div
							initial={{ opacity: 0, x: -200 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
							viewport={{ once: true }}
							className="w-[25%] lg:w-full md:w-full xm:w-full sm:w-full">
							<p className="text-[30px] lg:text-[25px] xm:text-[20px] sm:text-[20px] font-Poppins font-medium leading-tight">
								{item.description}
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 250 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{
								duration: 1,
								ease: "easeInOut",
								delay: 0.8,
							}}
							viewport={{ once: true }}
							className="w-[75%] lg:w-full md:w-full xm:w-full sm:w-full">
							<Image
								src={item.imageUrl}
								alt="heroImg"
								className="w-full h-[600px] lg:h-[300px] md:h-[300px] object-cover"
								width={800}
								height={400}
							/>
						</motion.div>
					</div>
				</div>
			))}
		</div>
	);
}
