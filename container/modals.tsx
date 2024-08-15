import Image from "next/image";
import { heroImg, modal1, modal2, modal3, modal4 } from "@/public";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";

export default function Modals() {
	const phares1 = ["Sketches and Models"];

	return (
		<div className="w-full padding-x py-10">
			<div className="w-full items-center justify-center flex flex-col gap-5 pt-20">
				<div className="w-full">
					<h1 className="text-[50px] uppercase font-IBMPlex leading-tight">
						<TextMask>{phares1}</TextMask>
					</h1>
				</div>
				<div className="w-full flex gap-10 md:flex-col">
					<div className="flex-1 md:flex">
						<motion.div
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
								src={modal1}
								alt="modal1"
								className="w-full object-cover"
							/>
						</motion.div>
						<motion.div
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
								src={modal2}
								alt="modal2"
								className="w-full object-cover"
							/>
						</motion.div>
					</div>
					<div className="flex-1 flex justify-around items-center">
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
								src={modal3}
								alt="modal3"
								className="w-[400px] object-cover"
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
							className="h-[600px]">
							<Image
								src={modal4}
								alt="modal4"
								className="w-full h-full object-cover"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
