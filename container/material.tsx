import Image from "next/image";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";
import {
	material1,
	material10,
	material11,
	material12,
	material2,
	material3,
	material4,
	material5,
	material6,
	material7,
	material8,
	materialImg,
	material9,
} from "@/public";

const materialImgs = [
	{
		id: 1,
		scr: material1,
	},
	{
		id: 2,
		scr: material2,
	},
	{
		id: 3,
		scr: material3,
	},
	{
		id: 4,
		scr: material4,
	},
	{
		id: 5,
		scr: material5,
	},
	{
		id: 6,
		scr: material6,
	},
	{
		id: 7,
		scr: material7,
	},
	{
		id: 8,
		scr: material8,
	},
	{
		id: 9,
		scr: material9,
	},
	{
		id: 10,
		scr: material10,
	},
	{
		id: 11,
		scr: material11,
	},
	{
		id: 12,
		scr: material12,
	},
];

export default function Mateerial() {
	const phares1 = ["Material Exploration"];
	const phares2 = ["Paper Pulp, Cellulose, Water"];
	return (
		<div className="w-full py-10">
			<div className="w-full flex justify-between gap-10 xm:flex-col-reverse sm:flex-col-reverse">
				<div className="w-[60%] flex padding-x xm:w-full sm:w-full">
					<div className="flex items-center gap-5 flex-wrap">
						{materialImgs.map((item) => (
							<motion.div
								key={item.id}
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									delay: item.id * 0.1,
									type: "spring",
								}}
								viewport={{ once: true }}
								className="w-[180px] lg:w-[150px] md:w-[150px] xm:w-[100px] sm:w-[100px] items-center justify-between gap-5">
								<Image
									src={item.scr}
									alt="hotelImg"
									className="w-full object-cover"
								/>
							</motion.div>
						))}
					</div>
				</div>
				<div className="w-[40%] h-full flex justify-end items-end flex-col xm:w-full sm:w-full">
					<Image
						src={materialImg}
						alt="hotelImg"
						className="w-[500px] object-cover xm:hidden sm:hidden"
					/>
					<h1 className="text-[30px] text-left w-full uppercase font-IBMPlex leading-tight pt-10  padding-x">
						<TextMask>{phares1}</TextMask>
					</h1>
					<h1 className="text-[20px] text-left w-full font-Poppins leading-tight  padding-x">
						<TextMask>{phares2}</TextMask>
					</h1>
				</div>
			</div>
		</div>
	);
}
