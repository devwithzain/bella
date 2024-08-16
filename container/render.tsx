import Image from "next/image";
import { render } from "@/public";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";

export default function Render() {
	const phares1 = ["Final Render"];
	const phares2 = [
		"This project creates biodegradable hotel",
		"amenities using recycled paper pulp, promoting",
		"sustainability in the hospitality industry. Through",
		"responsible sourcing, efficient manufacturing, and",
		"a closed-loop recycling system, we minimize",
		"environmental impact. By partnering with industry",
		"specialists and educating hotel guests, we",
		"demonstrate that luxury and eco-friendly",
		"practices can coexist, paving the way for a",
		"greener future in hospitality.",
	];
	const phares3 = [
		"This project creates biodegradable hotel amenities using recycled paper pulp, promoting sustainability in the hospitality industry. Through responsible sourcing, efficient manufacturing, and a closed-loop recycling system, we minimize environmental impact. By partnering with industry specialists and educating hotel guests, we demonstrate that luxury and eco-friendly practices can coexist, paving the way for a greener future in hospitality.",
	];

	return (
		<div className="w-full padding-x py-10">
			<div className="w-full h-full items-center justify-center flex flex-col gap-5">
				<div className="w-full">
					<h1 className="text-[50px] uppercase font-IBMPlex leading-tight">
						<TextMask>{phares1}</TextMask>
					</h1>
				</div>
				<div className="w-[70%] md:w-full xm:w-full sm:w-full flex justify-between items-center gap-10 xm:flex-col sm:flex-col">
					<div className="flex-1 hidden xl:flex">
						<h1 className="text-[18px] font-Poppins leading-tight">
							<TextMask>{phares2}</TextMask>
						</h1>
					</div>
					<div className="flex-1 flex xl:hidden">
						<h1 className="text-[18px] font-Poppins leading-tight">
							<TextMask>{phares3}</TextMask>
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
								src={render}
								alt="render"
								className="w-[400px] object-cover"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
