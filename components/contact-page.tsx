"use client";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";

export default function Contact() {
	const phares1 = ["Contact Me"];
	const phares2 = ["How can i help"];
	const phares3 = ["Name"];
	const phares4 = ["Email"];
	const phares5 = ["Phone"];
	const phares6 = ["Message"];
	const phares11 = ["Get In Touch"];
	const phares22 = [
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
	];

	return (
		<div className="w-full mt-20 flex flex-col justify-center bg-primary gap-20 padding-x">
			<div className="flex flex-col gap-2">
				<h1 className="text-[#141313] text-[180px] lg:text-[130px] md:text-[100px] xm:text-[50px] sm:text-[50px] font-normal uppercase leading-[200px] lg:leading-[110px] md:leading-none xm:leading-none sm:leading-none font-BananasFont">
					<TextMask>{phares1}</TextMask>
				</h1>
				<h1 className="w-fit text-[#BBB0D2] text-[180px] lg:text-[130px] md:text-[100px] xm:text-[50px] sm:text-[50px] font-normal uppercase leading-[150px] lg:leading-[110px] md:leading-none xm:leading-none sm:leading-none font-BananasFont">
					<TextMask>{phares2}</TextMask>
				</h1>
			</div>
			<div className="w-full xm:w-[100%] sm:w-[100%] md:w-[100%] padding-x py-[150px] lg:py-[100px] md:py-[80px] xm:py-[40px] sm:py-[40px] sm:text-[40px] xm:text-[40px] flex gap-6 border-4 border-white/20 bg-black rounded-[30px] xm:flex-col sm:flex-col">
				<div className="flex flex-1 flex-col gap-10">
					<h1 className="text-[70px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-BananasFont font-bold uppercase text-primary leading-none">
						<TextMask>{phares11}</TextMask>
					</h1>
					<h1 className="text-[20px] md:text-[18px] sm:text-[16px] xm:text-[16px] font-Poppins text-primary">
						<TextMask>{phares22}</TextMask>
					</h1>
					<motion.div
						className="w-full overflow-hidden"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}>
						<button className="w-fit px-[55px] md:px-[30px] xm:px-[20px] sm:px-[20px] md:py-[15px] xm:py-[10px] sm:py-[10px] py-[24px] bg-[#BBB0D2] justify-center items-center text-white text-[24px] md:text-[20px] sm:text-[17px] xm:text-[17px font-medium font-PlayfairDisplay leading-[33px]">
							Download my resume
						</button>
					</motion.div>
				</div>
				<div className="flex flex-1 flex-col gap-10">
					<div className="w-full flex flex-col border-b border-pritext-primary gap-2">
						<h1 className="text-primary text-md font-Poppins text-[22px]">
							<TextMask>{phares3}</TextMask>
						</h1>
						<input
							type="text"
							className="bg-transparent border-none focus:bg-transparent outline-none text-primary text-[18px] pb-1"
						/>
					</div>
					<div className="w-full flex flex-col border-b border-pritext-primary gap-2">
						<h1 className="text-primary text-md font-Poppins text-[22px]">
							<TextMask>{phares4}</TextMask>
						</h1>
						<input
							type="text"
							className="bg-transparent border-none focus:bg-transparent outline-none text-primary text-[18px] pb-1"
						/>
					</div>
					<div className="w-full flex flex-col border-b border-pritext-primary gap-2">
						<h1 className="text-primary text-md font-Poppins text-[22px]">
							<TextMask>{phares5}</TextMask>
						</h1>
						<input
							type="text"
							className="bg-transparent border-none focus:bg-transparent outline-none text-primary text-[18px] pb-1"
						/>
					</div>
					<div className="w-full flex flex-col border-b border-pritext-primary gap-2">
						<h1 className="text-primary text-md font-Poppins text-[22px]">
							<TextMask>{phares6}</TextMask>
						</h1>
						<input
							type="text"
							className="bg-transparent border-none focus:bg-transparent outline-none text-primary text-[18px] pb-1"
						/>
					</div>
					<motion.div
						className="w-full overflow-hidden"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}>
						<button className="w-fit px-[55px] md:px-[30px] xm:px-[20px] sm:px-[20px] md:py-[15px] xm:py-[10px] sm:py-[10px] py-[24px] bg-[#BBB0D2] justify-center items-center text-white text-[24px] md:text-[20px] sm:text-[17px] xm:text-[17px font-medium font-PlayfairDisplay leading-[33px]">
							Submit Now
						</button>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
