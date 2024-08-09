"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { TextMask } from "@/animations";

gsap.registerPlugin(ScrollTrigger);

export default function Information() {
	const phares1 = ["About Me"];
	const phares2 = [
		`Lorem Ipsum is simply dummy text of the printing  \n and typesetting industry. Lorem Ipsum has been the \n industry standard dummy text ever`,
	];
	const phares3 = ["Aug 2020 - Oct 2020"];
	const phares4 = ["Magnolla Jewelers"];
	const phares5 = ["Customer Service", "And Designer"];
	const phares6 = ["Sep 2022 - Dec 2022"];
	const phares7 = ["Circular Economy"];
	const phares8 = ["Internship"];

	useEffect(() => {
		let sections = gsap.utils.toArray(".process-item-wrapper");
		let mm = gsap.matchMedia();

		mm.add("(min-width: 768px)", () => {
			gsap.to(sections, {
				xPercent: (i) => -i * 100 + (i > 0 ? 20 * i : 0),
				duration: (i) => 1 * i,
				ease: "none",
				scrollTrigger: {
					trigger: ".containerss",
					pin: true,
					scrub: 2,
				},
			});
		});

		return () => {
			mm.revert();
		};
	}, []);

	return (
		<section className="w-full bg-black">
			<div className="containerss w-full">
				<div className="flex flex-wrap w-full">
					<div className="w-full overflow-hidden">
						<div className="inner-div flex w-full">
							{[...Array(3)].map((_, i) => (
								<div
									key={i}
									className="process-item-wrapper w-full shrink-0 flex items-center h-screen relative justify-center">
									<div className="w-[80%] xm:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] padding-x py-[150px] md:py-[80px] sm:text-[40px] xm:text-[40px flex gap-6 border-4 border-white/20 bg-black">
										<div className="flex flex-1 flex-col gap-10">
											<h1 className="text-[70px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-BananasFont font-bold uppercase text-[#DBCAB6] leading-none">
												<TextMask>{phares1}</TextMask>
											</h1>
											<h1 className="text-[20px] md:text-[18px] sm:text-[16px] xm:text-[16px] font-Poppins text-[#DBCAB6]">
												<TextMask>{phares2}</TextMask>
											</h1>
											<button className="w-fit px-[55px] md:px-[30px] md:py-[15px] py-[24px] bg-[#dd6013] justify-center items-center text-white text-[24px] md:text-[20px] sm:text-[17px] xm:text-[17px font-medium font-PlayfairDisplay leading-[33px]">
												Download my resume
											</button>
										</div>
										<div className="flex flex-1 flex-col gap-10">
											<div className="flex flex-col gap-5">
												<div className="flex justify-between gap-2 items-center">
													<h1 className="text-[20px] md:text-[16px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
														<TextMask>{phares3}</TextMask>
													</h1>
													<h1 className="text-[18px] font-Poppins text-[#DD6013]">
														<TextMask>{phares4}</TextMask>
													</h1>
												</div>
												<div className="">
													<h1 className="text-[50px] lg:text-[35px] md:text-[20px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
														<TextMask>{phares5}</TextMask>
													</h1>
												</div>
											</div>
											<div className="flex flex-col gap-5">
												<div className="flex  justify-between gap-2 items-center">
													<h1 className="text-[20px] md:text-[16px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
														<TextMask>{phares6}</TextMask>
													</h1>
													<h1 className="text-[18px] font-Poppins text-[#DD6013]">
														<TextMask>{phares7}</TextMask>
													</h1>
												</div>

												<div className="">
													<h1 className="text-[50px] lg:text-[35px] md:text-[20px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
														<TextMask>{phares8}</TextMask>
													</h1>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
