"use client";
import Card from "./card";
import { useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { TextMask } from "@/animations";
import Image from "next/image";
import {
	afterEffect,
	autodesk,
	illustration,
	indesign,
	photoshop,
} from "@/public";

export default function HorizontalScrollCarousel() {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const svgRef = useRef<SVGSVGElement | null>(null);
	const pathRef = useRef<SVGPathElement | null>(null);
	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

	useEffect(() => {
		const svg = svgRef.current;
		const path = pathRef.current;
		const target = targetRef.current;

		// Check if the target element has the .line-draw class
		if (!svg || !path || !target || !target.classList.contains("line-draw"))
			return;

		const pathLength = path.getTotalLength();

		path.style.strokeDasharray = pathLength.toString();
		path.style.strokeDashoffset = pathLength.toString();

		const handleScroll = () => {
			const rect = target.getBoundingClientRect();
			const startAnimationAt = window.innerHeight; // Adjust the start position
			const distance = window.scrollY - rect.top + startAnimationAt;

			if (distance > 0 && rect.top < window.innerHeight) {
				const totalDistance =
					svg.clientHeight + rect.height - window.innerHeight;
				const percentage = distance / totalDistance;

				const slowDownFactor = 0.55;
				const adjustedPercentage = percentage * slowDownFactor;

				path.style.strokeDashoffset = `${
					pathLength * (1 - adjustedPercentage)
				}`;
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
			<section
				ref={targetRef}
				className="relative h-[400vh] bg-[#ECECEC] line-draw xm:hidden sm:hidden">
				<div className="sticky top-0 flex h-screen items-center overflow-hidden border svg-container">
					<motion.div
						style={{ x }}
						className="w-full flex h-full">
						<Card />
						<svg
							ref={svgRef}
							width="5930"
							height="2004"
							viewBox="0 0 4530 2004"
							fill="none"
							className="w-auto h-auto xlht:!h-[1350px] xlht:!top-[-125%] xlht:!left-[8%]  mht:!h-[1050px] mht:!top-[-45%] mht:!left-[8%]  sdht:!h-[1500px] sdht:!top-[-70%] sdht:!left-[5%] mdd:!h-[1700px] mdd:!top-[-90%] mdd:!left-[5%] lht:!h-[1280px] lht:top-[-80%] lht:left-[8%] td:h-[1300px] top-[-110%] td:top-[-90%] td:left-[10%] overflow-visible left-[5%] shrink-0 absolute z-[9]">
							<path
								className="path"
								ref={pathRef}
								d="M240.5 0.5C219.8 279.23 144.043 1608.94 123.343 1887.68C119.603 1938 98.993 2004.14 48.643 2000.84C3.17299 1997.86 -11.897 1928.43 19.853 1895.74C51.593 1863.05 105.513 1863.93 147.743 1881.04C189.973 1898.15 225.593 1928.23 266.023 1949.24C412.953 2025.59 617.453 1953.1 683.493 1801.26C731.133 1691.74 719.313 1547.44 814.003 1474.66C907.103 1403.1 1043.22 1449.85 1140.54 1515.55C1237.87 1581.25 1333.45 1667.15 1450.82 1670.47C1630.47 1675.55 1783.07 1482.71 1958.75 1520.62C2038.57 1537.84 2099.67 1599.54 2162.56 1651.63C2225.45 1703.71 2305.68 1750.6 2384.72 1730.11C2529.56 1692.55 2549.71 1470.49 2688.37 1414.25C2799.19 1369.3 2916.83 1454.04 3006.1 1533.62C3095.37 1613.2 3211.66 1698.97 3323.29 1656.05C3406.99 1623.87 3454.01 1527.99 3538.65 1498.37C3606.76 1474.54 3682.9 1500.14 3743.67 1539.06C3804.44 1577.98 3856.29 1629.86 3918.32 1666.72C4123.22 1788.48 4423.84 1697.13 4526.37 1481.97"
								stroke="#BBB0D2"
								strokeWidth="10"
							/>
						</svg>
					</motion.div>
				</div>
			</section>
			<div className="hidden xm:flex sm:flex w-full padding-x flex-col gap-5">
				<div className="flex flex-col gap-5 w-full">
					<div className="w-full">
						<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
							<TextMask>{phares2}</TextMask>
							<TextMask>{phares3}</TextMask>
						</h1>
					</div>
					<div>
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							viewport={{ once: true }}
							className="w-[150px] h-[150px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
							<Image
								className="w-[80px]"
								src={autodesk}
								alt="Image"
								width={80}
								height={80}
							/>
						</motion.div>
					</div>
				</div>
				<div className="flex flex-col gap-5 w-full">
					<div className="w-full">
						<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
							<TextMask>{phares4}</TextMask>
							<TextMask>{phares5}</TextMask>
						</h1>
					</div>
					<div>
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							viewport={{ once: true }}
							className="w-[150px] h-[150px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
							<Image
								className="w-[80px]"
								src={afterEffect}
								alt="Image"
								width={80}
								height={80}
							/>
						</motion.div>
					</div>
				</div>
				<div className="flex flex-col gap-5 w-full">
					<div className="w-full">
						<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
							<TextMask>{phares6}</TextMask>
							<TextMask>{phares7}</TextMask>
						</h1>
					</div>
					<div>
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							viewport={{ once: true }}
							className="w-[150px] h-[150px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
							<Image
								className="w-[80px]"
								src={illustration}
								alt="Image"
								width={80}
								height={80}
							/>
						</motion.div>
					</div>
				</div>
				<div className="flex flex-col gap-5 w-full">
					<div className="w-full">
						<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
							<TextMask>{phares8}</TextMask>
							<TextMask>{phares9}</TextMask>
						</h1>
					</div>
					<div>
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							viewport={{ once: true }}
							className="w-[150px] h-[150px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
							<Image
								className="w-[80px]"
								src={photoshop}
								alt="Image"
								width={80}
								height={80}
							/>
						</motion.div>
					</div>
				</div>
				<div className="flex flex-col gap-5 w-full">
					<div className="w-full">
						<h1 className="text-[120px] tracking-tighter mdd:text-[100px] xlht:text-[70px] lht:text-[60px] td:text-[60px] lg:text-[80px] mht:text-[40px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-IBMPlex font-extrabold uppercase text-[#1F201D] leading-tight">
							<TextMask>{phares10}</TextMask>
							<TextMask>{phares11}</TextMask>
						</h1>
					</div>
					<div>
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							viewport={{ once: true }}
							className="w-[150px] h-[150px] td:w-[200px] td:h-[200px] lg:w-[250px] lg:h-[250px] mht:w-[200px] mht:h-[200px] md:w-[250px] md:h-[250px] rounded-full border-4 border-[#bbb0d2] flex items-center justify-center bg-primary z-50">
							<Image
								className="w-[80px]"
								src={indesign}
								alt="Image"
								width={80}
								height={80}
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
}
