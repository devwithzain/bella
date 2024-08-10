"use client";
import Image from "next/image";
import { aboutImg, heroBg } from "@/public";
import Link from "next/link";

export default function Hero() {
	return (
		<>
			<div className="w-full h-screen padding-x bg-[#BBB0D2]">
				<div className="w-full h-full">
					<Image
						src={heroBg}
						alt="heroBg"
						className="w-full h-full object-contain"
					/>
				</div>
			</div>
			<div className="w-full flex items-center justify-between gap-5 py-5 padding-x bg-white">
				<div>
					<Link
						href="/"
						className={`text-[25px] text-black font-bold font-Poppins tracking-tighter hover:tracking-[5px] transition-all duration-200 ease-linear `}>
						Home
					</Link>
				</div>
				<div className="flex items-center gap-5">
					<div className="">
						<Link
							href="/work"
							className={`text-[25px] text-black font-bold font-Poppins tracking-tighter hover:tracking-[5px] transition-all duration-200 ease-linear `}>
							Work
						</Link>
					</div>
					<div className="">
						<Link
							href="/contact"
							className={`text-[25px] text-black font-bold font-Poppins tracking-tighter hover:tracking-[5px] transition-all duration-200 ease-linear `}>
							Contact
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-between gap-5 bg-white items-center padding-x py-20">
				<div className="flex flex-1 items-center justify-center">
					<Image
						src={aboutImg}
						alt="aboutImg"
						width={800}
						height={400}
						className="w-[80%] h-[80%] object-cover"
					/>
				</div>
				<div className="flex flex-1">
					<div className="flex flex-col gap-5">
						<div>
							<h1 className="text-black text-[95px] font-semibold font-Poppins leading-[110px]">
								Welcome To My Creative Journey!
							</h1>
						</div>
						<div className="flex flex-col gap-5">
							<p className="text-black text-[24px] leading-[36px] font-normal font-Poppins">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industrys standard dummy text
								ever since the 1500s, when an unknown printer took a galley of
								type and scrambled it to make a type specimen book.
							</p>
							<p className="text-black text-[24px] leading-[36px] font-normal font-Poppins">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industrys standard dummy text
								ever since the 1500s, when an unknown printer took a galley of
								type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
