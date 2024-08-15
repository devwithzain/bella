import {
	danger1,
	danger2,
	danger3,
	danger4,
	danger5,
	danger6,
	danger7,
	danger8,
} from "@/public";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Danger() {
	return (
		<div className="w-full padding-x py-10">
			<div className="w-full h-full flex items-end justify-center gap-10 md:flex-wrap md:items-start md:justify-start">
				<div className="flex gap-5 items-center">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1,
							easee: "easeInOut",
							type: "spring",
						}}
						viewport={{ once: true }}>
						<Image
							src={danger1}
							alt="danger"
							className="w-[60px]"
						/>
					</motion.div>
					<div className="flex flex-col gap-2">
						<div className="flex justify-between items-center">
							<motion.div
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									type: "spring",
								}}
								viewport={{ once: true }}>
								<h1 className="text-[50px] lg:text-[30px] md:text-[30px] font-IBMPlex leading-tight">
									99%
								</h1>
								<p className="text-[18px] lg:text-[16px] font-Poppins leading-tight">
									of all the <br /> toothbrushes in the <br /> world are made
									from <br />
									plastic.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									type: "spring",
								}}
								viewport={{ once: true }}>
								<div className="w-[150px] h-[150px] rounded-full bg-gray-300 text-center text-black flex items-center justify-center relative">
									Plastic: Polypropylene Polyethylene
									<div className="w-[70px] h-[70px] rounded-full bg-black text-white flex items-center justify-center absolute -top-8 left-[35px]">
										Other
									</div>
								</div>
							</motion.div>
						</div>
						<div className="flex justify-between items-center">
							<motion.div
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									type: "spring",
								}}
								viewport={{ once: true }}>
								<h1 className="text-[50px] lg:text-[30px] md:text-[30px] font-IBMPlex leading-tight">
									1 Billion
								</h1>
								<p className="text-[18px] lg:text-[16px] font-Poppins leading-tight">
									plastic toothbrushes <br /> are thrown away <br /> every year
									in the <br /> United States.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									type: "spring",
								}}
								viewport={{ once: true }}>
								<Image
									src={danger4}
									alt="danger"
									className="w-[100px]"
								/>
							</motion.div>
						</div>
						<div className="flex justify-between items-center">
							<motion.div
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									type: "spring",
								}}
								viewport={{ once: true }}>
								<h1 className="text-[50px] lg:text-[30px] md:text-[30px] font-IBMPlex leading-tight">
									5 Trillion
								</h1>
								<p className="text-[18px] lg:text-[16px] font-Poppins leading-tight">
									end up in landfills <br /> and oceans.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									type: "spring",
								}}
								viewport={{ once: true }}>
								<Image
									src={danger5}
									alt="danger"
									className="w-[100px]"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<div className="flex gap-5 items-center">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1,
							easee: "easeInOut",
							type: "spring",
						}}
						viewport={{ once: true }}>
						<Image
							src={danger2}
							alt="danger"
							className="w-[160px]"
						/>
					</motion.div>
					<div className="flex flex-col gap-2">
						<div className="flex justify-between items-center">
							<motion.div
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									type: "spring",
								}}
								viewport={{ once: true }}>
								<h1 className="text-[50px] lg:text-[30px] md:text-[30px] font-IBMPlex leading-tight">
									2 Billion
								</h1>
								<p className="text-[18px] lg:text-[16px] font-Poppins leading-tight">
									razors and refill <br /> blades get tossed in <br /> the U.S.
									each year.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									type: "spring",
								}}
								viewport={{ once: true }}>
								<Image
									src={danger6}
									alt="danger"
									className="w-[100px]"
								/>
							</motion.div>
						</div>
						<div className="flex justify-between items-center">
							<motion.div
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									type: "spring",
								}}
								viewport={{ once: true }}>
								<p className="text-[18px] lg:text-[16px] font-Poppins leading-tight">
									A standard <br /> disposable plastic <br /> razor is good for
									3 to <br /> 10 shaves before it <br /> gets blunt- then off to{" "}
									<br /> the landfill.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									type: "spring",
								}}
								viewport={{ once: true }}>
								<Image
									src={danger7}
									alt="danger"
									className="w-[100px]"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<div className="flex gap-5 items-center">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1,
							easee: "easeInOut",
							type: "spring",
						}}
						viewport={{ once: true }}>
						<Image
							src={danger3}
							alt="danger"
							className="w-[100px]"
						/>
					</motion.div>
					<div className="flex flex-col gap-2">
						<div className="flex justify-between items-center">
							<motion.div
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									type: "spring",
								}}
								viewport={{ once: true }}>
								<p className="text-[18px] lg:text-[16px] font-Poppins leading-tight">
									Plastic will take <br /> hundreds of years to <br /> break up
									into <br />
									microplastics that <br /> only do further harm <br /> to our
									environment.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 1,
									easee: "easeInOut",
									type: "spring",
								}}
								viewport={{ once: true }}>
								<Image
									src={danger8}
									alt="danger"
									className="w-[100px]"
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
