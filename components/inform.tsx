"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Information() {
	useEffect(() => {
		let sections = gsap.utils.toArray(".process-item-wrapper");
		let mm = gsap.matchMedia();

		mm.add("(min-width: 768px)", () => {
			gsap.to(sections, {
				xPercent: (i) => -i * 100 + (i > 0 ? 20 * i : 0),
				duration: (i) => 0.5 * i,
				ease: "none",
				scrollTrigger: {
					trigger: ".containerss",
					pin: true,
					scrub: 0.1,
				},
			});
		});

		return () => {
			mm.revert();
		};
	}, []);

	return (
		<section className="w-full">
			<div className="containerss w-full">
				<div className="flex flex-wrap w-full">
					<div className="w-full overflow-hidden">
						<div className="inner-div flex w-full">
							{[...Array(3)].map((_, i) => (
								<div
									key={i}
									className="process-item-wrapper w-full shrink-0 flex items-center bg-black h-screen relative">
									<div className="w-full p-[150px] flex flex-col gap-6 border-4 border-white/20">
										<div className="flex flex-1 flex-col gap-10">
											<h1 className="text-[70px] font-BananasFont font-bold uppercase text-[#DBCAB6] leading-none">
												About Me
											</h1>
											<p className="text-[20px] font-Poppins text-[#DBCAB6]">
												Lorem Ipsum is simply dummy text of the printing <br />
												and typesetting industry. Lorem Ipsum has been the
												<br />
												industry standard dummy text ever
											</p>
										</div>
										<div className="flex flex-1 flex-col gap-10">
											<div className="flex flex-col gap-5">
												<div className="flex  flex-col gap-2">
													<p className="text-[18px] font-Poppins text-[#DD6013]">
														Magnolla Jewelers
													</p>
													<h1 className="text-[20px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
														Aug 2020 - Oct 2020
													</h1>
												</div>
												<div className="">
													<h1 className="text-[50px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
														Customer Service <br /> And Designer
													</h1>
												</div>
											</div>
											<div className="flex flex-col gap-5">
												<div className="flex  flex-col gap-2">
													<p className="text-[18px] font-Poppins text-[#DD6013]">
														Circular Economy
													</p>
													<h1 className="text-[20px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
														Sep 2022 - Dec 2022
													</h1>
												</div>

												<div className="">
													<h1 className="text-[50px] font-Poppins font-bold uppercase text-[#DBCAB6] leading-none">
														Internship
													</h1>
												</div>
											</div>
											<button className="w-fit px-[55px] py-[24px] bg-[#dd6013] justify-center items-center text-white text-[24px] font-medium font-PlayfairDisplay leading-[33px]">
												Download my resume
											</button>
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
