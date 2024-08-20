import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TworkSolutionProps } from "@/types";

export default function Solutions() {
	const [data, setData] = useState<TworkSolutionProps[]>([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/api/solution");
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
				<div
					className="w-full h-full items-center justify-center flex flex-col gap-10"
					key={item.id}>
					<div className="w-full flex flex-col gap-5">
						<h1 className="text-[50px] uppercase font-IBMPlex leading-tight">
							{item.title}
						</h1>
						<div>
							<h1 className="text-[30px] uppercase font-IBMPlex leading-tight">
								{item.heading}
							</h1>
						</div>
						<div>
							<h1 className="text-[18px] font-Poppins leading-tight">
								{item.paragraph}
							</h1>
						</div>
					</div>
					<div className="w-full flex flex-col gap-10">
						<h1 className="text-[30px] uppercase font-IBMPlex leading-tight">
							{item.subTitle}
						</h1>
						<div className="flex items-center gap-5 xm:flex-wrap sm:flex-wrap justify-between">
							{item.images.map((img, i) => (
								<motion.div
									key={item.id}
									initial={{ opacity: 0, x: -100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										duration: 1,
										easee: "easeInOut",
										delay: i * 0.3,
										type: "spring",
									}}
									viewport={{ once: true }}
									className="w-full items-center justify-between gap-5 xm:w-[120px] sm:w-[120px]">
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
