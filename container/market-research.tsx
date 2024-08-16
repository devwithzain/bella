import Image from "next/image";
import {
	hotel1,
	hotel2,
	hotel3,
	hotel4,
	hotel5,
	hotel6,
	hotelGraph,
	hotelImg,
} from "@/public";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";

const hotelImgs = [
	{
		id: 1,
		scr: hotel1,
	},
	{
		id: 2,
		scr: hotel2,
	},
	{
		id: 3,
		scr: hotel3,
	},
	{
		id: 4,
		scr: hotel4,
	},
	{
		id: 5,
		scr: hotel5,
	},
	{
		id: 6,
		scr: hotel6,
	},
];

export default function MarketRearch() {
	const phares1 = ["Hotel Amenity Kit", "Market Research"];
	const phares2 = ["Life cycle:"];

	return (
		<div className="w-full padding-x py-10">
			<div className="w-full h-full justify-between flex gap-5">
				<div className="w-full flex flex-col gap-6">
					<h1 className="text-[70px] lg:text-[50px] md:text-[40px] xm:text-[30px] sm:text-[30px] uppercase font-IBMPlex leading-tight">
						<TextMask>{phares1}</TextMask>
					</h1>
					<div className="flex flex-col gap-6">
						<h1 className="text-[25px] uppercase font-IBMPlex leading-tight">
							<TextMask>{phares2}</TextMask>
						</h1>
						<div className="w-full flex xm:flex-wrap sm:flex-wrap justify-between gap-4">
							{hotelImgs.map((item) => (
								<motion.div
									key={item.id}
									initial={{ opacity: 0, x: -100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										duration: 1,
										easee: "easeInOut",
										delay: item.id * 0.2,
										type: "spring",
									}}
									viewport={{ once: true }}
									className="w-[75%] flex items-end xm:w-[100px] sm:w-[100px]">
									<Image
										src={item.scr}
										alt="hotelImg"
										className="w-[80px] h-full"
									/>
								</motion.div>
							))}
						</div>
					</div>
				</div>
				<div className="w-full h-full flex flex-col justify-center items-center gap-10 xm:hidden sm:hidden">
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
							src={hotelImg}
							alt="hotelImg"
							className="w-full h-[400px] object-cover"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 200 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 1,
							easee: "easeInOut",
							delay: 0.8,
							type: "spring",
						}}
						viewport={{ once: true }}
						className="w-full flex items-center justify-center">
						<Image
							src={hotelGraph}
							alt="hotelGraph"
							className="w-[60%] object-cover"
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
