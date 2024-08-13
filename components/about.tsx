"use client";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";

export default function About() {
	const phares1 = ["About"];
	const phares2 = ["Bella Han"];
	const phares3 = [
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	];
	const phares4 = [
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	];
	return (
		<>
			<div className="w-full h-screen flex flex-col padding-x gap-10 items-center justify-center bg-primary">
				<div className="flex flex-col gap-2 items-center">
					<h1 className="text-[#141313] text-[180px] lg:text-[150px] md:text-[130px] xm:text-[80px] sm:text-[80px] font-normal uppercase leading-[200px] lg:leading-[180px] md:leading-none xm:leading-none sm:leading-none font-BananasFont">
						<TextMask>{phares1}</TextMask>
					</h1>
					<h1 className="w-fit p-4 text-[#DD6013] border-[#DD6013] border-2 text-[180px] lg:text-[150px] md:text-[130px] xm:text-[80px] sm:text-[80px] font-normal uppercase leading-[150px] lg:leading-[180px] md:leading-none xm:leading-none sm:leading-none font-BananasFont">
						<TextMask>{phares2}</TextMask>
					</h1>
				</div>
				<div className="w-full flex flex-col justify-between gap-10">
					<div className="flex justify-between gap-5">
						<h1 className="text-[20px] font-Poppins font-normal">
							<TextMask>{phares3}</TextMask>
						</h1>
						<h1 className="text-[20px] font-Poppins font-normal">
							<TextMask>{phares4}</TextMask>
						</h1>
					</div>
					<motion.div
						className="w-full flex items-center justify-center overflow-hidden"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}>
						<button className="w-fit px-[55px] md:px-[30px] md:py-[15px] py-[24px] bg-[#dd6013] justify-center items-center text-white text-[24px] md:text-[20px] sm:text-[17px] xm:text-[17px font-medium font-PlayfairDisplay leading-[33px]">
							Download my resume
						</button>
					</motion.div>
				</div>
			</div>
		</>
	);
}
