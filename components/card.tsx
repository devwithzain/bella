import Image from "next/image";
import {
	afterEffect,
	autodesk,
	illustration,
	indesign,
	photoshop,
} from "@/public";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";

export default function Card() {
	const phares1 = [`My \n Skills`];
	const phares2 = ["01"];
	const phares3 = [`Fusion \n 360`];
	const phares4 = ["02"];
	const phares5 = ["After Effect"];
	const phares6 = ["03"];
	const phares7 = ["Illustrator"];
	const phares8 = ["04"];
	const phares9 = ["Phtoshop"];
	const phares10 = ["05"];
	const phares11 = ["Indesign"];
	return (
		<>
			<div className="h-full w-full relative shrink-0">
				<div className="w-full h-full absolute inset-0 z-10 flex justify-between">
					<div className="w-full h-full flex items-center justify-between">
						<div className="w-full h-full items-end p-10 flex flex-1">
							<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
								<TextMask>{phares1}</TextMask>
							</h1>
						</div>
						<div className="w-full h-full p-10 flex justify-center flex-1 items-center">
							<motion.div
								initial={{ opacity: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
								viewport={{ once: true }}
								className="w-[350px] h-[350px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
								<Image
									className="lg:w-[100px] td:h-[80px] lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
									src={autodesk}
									alt="Image"
									width={150}
									height={150}
								/>
							</motion.div>
						</div>
						<div className="w-full h-full p-10 flex flex-1 items-start">
							<div className="flex flex-col items-center relative z-[99]">
								<h1 className="text-[#2E2E2E]/10 text-[200px] mdd:text-[120px] tracking-tighter  td:text-[60px] lg:text-[80px] mht:text-[60px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-tight">
									<TextMask>{phares2}</TextMask>
								</h1>
								<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
									<TextMask>{phares3}</TextMask>
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-[50%] h-full flex-col flex items-center justify-between shrink-0 ">
				<div className="w-full h-full flex items-center justify-center flex-col">
					<div className="flex flex-col items-center relative z-[99]">
						<h1 className="text-[#2E2E2E]/10 text-[200px] mdd:text-[120px] tracking-tighter  td:text-[60px] lg:text-[80px] mht:text-[60px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-tight">
							<TextMask>{phares4}</TextMask>
						</h1>
						<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
							<TextMask>{phares5}</TextMask>
						</h1>
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						viewport={{ once: true }}
						className="w-[350px] h-[350px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
						<Image
							className="lg:w-[100px] td:h-[80px] lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
							src={afterEffect}
							alt="Image"
							width={200}
							height={200}
						/>
					</motion.div>
				</div>
			</div>
			<div className="w-[50%] h-full flex-col flex items-center justify-between shrink-0">
				<div className="w-full h-full flex items-center justify-center flex-col">
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						viewport={{ once: true }}
						className="w-[350px] h-[350px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
						<Image
							className="lg:w-[100px] td:h-[80px] lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
							src={illustration}
							alt="Image"
							width={200}
							height={200}
						/>
					</motion.div>
					<div className="flex flex-col items-center relative z-[99]">
						<h1 className="text-[#2E2E2E]/10 text-[200px] mdd:text-[120px] tracking-tighter xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-tight">
							<TextMask>{phares6}</TextMask>
						</h1>
						<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
							<TextMask>{phares7}</TextMask>
						</h1>
					</div>
				</div>
			</div>
			<div className="w-[50%] h-full flex-col flex items-center justify-between shrink-0">
				<div className="w-full h-full flex items-center justify-center flex-col">
					<div className="flex flex-col items-center relative z-[99]">
						<h1 className="text-[#2E2E2E]/10 text-[200px] mdd:text-[120px] tracking-tighter  td:text-[60px] lg:text-[80px] mht:text-[60px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-tight">
							<TextMask>{phares8}</TextMask>
						</h1>
						<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
							<TextMask>{phares9}</TextMask>
						</h1>
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						viewport={{ once: true }}
						className="w-[350px] h-[350px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
						<Image
							className="lg:w-[100px] td:h-[80px] lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
							src={photoshop}
							alt="Image"
							width={200}
							height={200}
						/>
					</motion.div>
				</div>
			</div>
			<div className="w-[50%] h-full flex-col flex items-center justify-between shrink-0">
				<div className="w-full h-full flex items-center justify-center flex-col">
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						viewport={{ once: true }}
						className="w-[350px] h-[350px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
						<Image
							className="lg:w-[100px] td:h-[80px] lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
							src={indesign}
							alt="Image"
							width={200}
							height={200}
						/>
					</motion.div>
					<div className="flex flex-col items-center relative z-[99]">
						<h1 className="text-[#2E2E2E]/10 text-[200px] mdd:text-[120px] tracking-tighter  td:text-[60px] lg:text-[80px] mht:text-[60px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-tight">
							<TextMask>{phares10}</TextMask>
						</h1>
						<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
							<TextMask>{phares11}</TextMask>
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}
