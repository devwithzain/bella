"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function Information() {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

	return (
		<section
			ref={targetRef}
			className="w-full relative h-[300vh]">
			<div className="w-full sticky top-0 flex h-screen items-center overflow-hidden">
				<motion.div
					style={{ x }}
					className="w-full flex h-full  border-t-2 border-[#1F201D]">
					<div className="h-full w-full relative bg-[#171715] shrink-0">
						<div className="w-full h-full absolute inset-0 z-10 flex justify-between p-20 gap-6">
							<div className="w-full h-full flex items-center justify-between border-[2px] border-[#F9F3EB] p-14 rounded-[30px]">
								<div className="flex flex-1 flex-col gap-10">
									<h1 className="text-[70px] font-BananasFont font-bold uppercase text-[#DBCAB6] leading-none">
										About Me
									</h1>
									<p className="text-[20px] font-Poppins text-[#DBCAB6]">
										Lorem Ipsum is simply dummy text of the printing <br /> and
										typesetting industry. Lorem Ipsum has been the <br />
										industry standard dummy text ever
									</p>
									<button className="w-fit px-[55px] py-[24px] bg-[#dd6013] justify-center items-center text-white text-[24px] font-medium font-PlayfairDisplay leading-[33px]">
										Download my resume
									</button>
								</div>
								<div className="flex flex-1 flex-col gap-10">
									<div className="flex flex-col justify-between gap-5">
										<div className="flex items-center justify-between gap-2">
											<h1 className="text-[20px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
												Aug 2020 - Oct 2020
											</h1>

											<p className="text-[18px] font-Poppins text-[#DD6013]">
												Magnolla Jewelers
											</p>
										</div>
										<div className="">
											<h1 className="text-[50px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
												Customer Service <br /> And Designer
											</h1>
										</div>
									</div>
									<div className="flex flex-col justify-between gap-5">
										<div className="flex items-center justify-between gap-2">
											<h1 className="text-[20px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
												Sep 2022 - Dec 2022
											</h1>

											<p className="text-[18px] font-Poppins text-[#DD6013]">
												Circular Economy
											</p>
										</div>
										<div className="">
											<h1 className="text-[50px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
												Internship
											</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="h-full w-full relative bg-[#171715] shrink-0">
						<div className="w-full h-full absolute inset-0 z-10 flex justify-between p-20 gap-6">
							<div className="w-full h-full flex items-center justify-between border-[2px] border-[#F9F3EB] p-14 rounded-[30px]">
								<div className="flex flex-1 flex-col gap-10">
									<h1 className="text-[70px] font-BananasFont font-bold uppercase text-[#DBCAB6] leading-none">
										About Me
									</h1>
									<p className="text-[20px] font-Poppins text-[#DBCAB6]">
										Lorem Ipsum is simply dummy text of the printing <br /> and
										typesetting industry. Lorem Ipsum has been the <br />
										industry standard dummy text ever
									</p>
									<button className="w-fit px-[55px] py-[24px] bg-[#dd6013] justify-center items-center text-white text-[24px] font-medium font-PlayfairDisplay leading-[33px]">
										Download my resume
									</button>
								</div>
								<div className="flex flex-1 flex-col gap-10">
									<div className="flex flex-col justify-between gap-5">
										<div className="flex items-center justify-between gap-2">
											<h1 className="text-[20px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
												Aug 2020 - Oct 2020
											</h1>

											<p className="text-[18px] font-Poppins text-[#DD6013]">
												Magnolla Jewelers
											</p>
										</div>
										<div className="">
											<h1 className="text-[50px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
												Customer Service <br /> And Designer
											</h1>
										</div>
									</div>
									<div className="flex flex-col justify-between gap-5">
										<div className="flex items-center justify-between gap-2">
											<h1 className="text-[20px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
												Sep 2022 - Dec 2022
											</h1>

											<p className="text-[18px] font-Poppins text-[#DD6013]">
												Circular Economy
											</p>
										</div>
										<div className="">
											<h1 className="text-[50px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
												Internship
											</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="h-full w-full relative bg-[#171715] shrink-0">
						<div className="w-full h-full absolute inset-0 z-10 flex justify-between p-20 gap-6">
							<div className="w-full h-full flex items-center justify-between border-[2px] border-[#F9F3EB] p-14 rounded-[30px]">
								<div className="flex flex-1 flex-col gap-10">
									<h1 className="text-[70px] font-BananasFont font-bold uppercase text-[#DBCAB6] leading-none">
										About Me
									</h1>
									<p className="text-[20px] font-Poppins text-[#DBCAB6]">
										Lorem Ipsum is simply dummy text of the printing <br /> and
										typesetting industry. Lorem Ipsum has been the <br />
										industry standard dummy text ever
									</p>
									<button className="w-fit px-[55px] py-[24px] bg-[#dd6013] justify-center items-center text-white text-[24px] font-medium font-PlayfairDisplay leading-[33px]">
										Download my resume
									</button>
								</div>
								<div className="flex flex-1 flex-col gap-10">
									<div className="flex flex-col justify-between gap-5">
										<div className="flex items-center justify-between gap-2">
											<h1 className="text-[20px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
												Aug 2020 - Oct 2020
											</h1>

											<p className="text-[18px] font-Poppins text-[#DD6013]">
												Magnolla Jewelers
											</p>
										</div>
										<div className="">
											<h1 className="text-[50px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
												Customer Service <br /> And Designer
											</h1>
										</div>
									</div>
									<div className="flex flex-col justify-between gap-5">
										<div className="flex items-center justify-between gap-2">
											<h1 className="text-[20px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
												Sep 2022 - Dec 2022
											</h1>

											<p className="text-[18px] font-Poppins text-[#DD6013]">
												Circular Economy
											</p>
										</div>
										<div className="">
											<h1 className="text-[50px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
												Internship
											</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
