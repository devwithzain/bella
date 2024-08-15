import Image from "next/image";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";
import { impact1, impact2, impact3, impact4, impact5, impact } from "@/public";

const impactImg = [
	{
		id: 1,
		scr: impact1,
	},
	{
		id: 2,
		scr: impact2,
	},
	{
		id: 3,
		scr: impact3,
	},
	{
		id: 4,
		scr: impact4,
	},
	{
		id: 5,
		scr: impact5,
	},
];

export default function Impact() {
	const phares1 = ["The Big Picture"];
	const phares2 = ["The Victims"];

	return (
		<div className="w-full pb-10 padding-x">
			<div className="w-full h-full items-center justify-center flex flex-col gap-10">
				<div className="w-full flex flex-col gap-10">
					<h1 className="text-[30px] uppercase font-IBMPlex leading-tight">
						<TextMask>{phares1}</TextMask>
					</h1>
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
							src={impact}
							alt="impact"
							className="w-full h-full object-cover"
						/>
					</motion.div>
				</div>
				<div className="w-full flex flex-col gap-10">
					<h1 className="text-[30px] uppercase font-IBMPlex leading-tight">
						<TextMask>{phares2}</TextMask>
					</h1>
					<div className="flex items-center gap-5">
						{impactImg.map((item) => (
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
