import Image from "next/image";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";
import { solution1, solution2, solution3, solution4 } from "@/public";

const solutionImg = [
	{
		id: 1,
		scr: solution1,
	},
	{
		id: 2,
		scr: solution2,
	},
	{
		id: 3,
		scr: solution3,
	},
	{
		id: 4,
		scr: solution4,
	},
];

export default function Solutions() {
	const phares1 = ["Solution"];
	const phares2 = ["Paper Pulp From Waste Paper"];
	const phares3 = [
		"Opting for paper pulp derived from waste paper is a sustainable choice that aligns with responsible environmental practices. By using recycled materials, which contribute to forest conservation, divert paper from landfills, and reduce our carbon footprint. This choice supports an energy-efficient and water-conscious manufacturing process, reflecting our commitment to responsible resource management. Embracing a circular economy, our products minimize waste and help maintain the carbon stored in existing paper products, actively contributing to carbon sequestration.",
	];
	const phares4 = ["Benefits"];

	return (
		<div className="w-full py-10 padding-x">
			<div className="w-full h-full items-center justify-center flex flex-col gap-10">
				<div className="w-full flex flex-col gap-5">
					<h1 className="text-[50px] uppercase font-IBMPlex leading-tight">
						<TextMask>{phares1}</TextMask>
					</h1>
					<div>
						<h1 className="text-[30px] uppercase font-IBMPlex leading-tight">
							<TextMask>{phares2}</TextMask>
						</h1>
					</div>
					<div>
						<h1 className="text-[18px] font-Poppins leading-tight">
							<TextMask>{phares3}</TextMask>
						</h1>
					</div>
				</div>
				<div className="w-full flex flex-col gap-10">
					<h1 className="text-[30px] uppercase font-IBMPlex leading-tight">
						<TextMask>{phares4}</TextMask>
					</h1>
					<div className="flex items-center gap-5">
						{solutionImg.map((item) => (
							<motion.div
								key={item.id}
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									delay: item.id * 0.3,
									type: "spring",
								}}
								viewport={{ once: true }}
								className="w-full items-center justify-between gap-5">
								<Image
									src={item.scr}
									alt="hotelImg"
									className="w-[200px] object-cover"
								/>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
