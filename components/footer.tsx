import Link from "next/link";
import { pin } from "@/public";
import Image from "next/image";
import { Facebook, Instagram, MoveRight } from "lucide-react";

export default function Footer() {
	return (
		<div className="w-full">
			<div className="w-full flex flex-col gap-24 padding-x py-10">
				<div className="w-full flex justify-between gap-5">
					<div className="flex flex-col">
						<div className="flex flex-col gap-4">
							<h1 className="text-black text-3xl font-bold font-PlayfairDisplay leading-[50px]">
								Call Us
							</h1>
							<Link
								href="tel:+16099554601"
								className="text-black text-2xl font-normal font-Poppins">
								+160 995 54601
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-14">
						<div className="flex flex-col gap-4">
							<h1 className="text-black text-3xl font-bold font-PlayfairDisplay leading-[50px]">
								Email
							</h1>
							<Link
								href="mailto:b3lla1124@gmail.com"
								className="text-black text-2xl font-normal font-Poppins">
								b3lla1124@gmail.com
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-4">
							<h1 className="text-black text-3xl font-bold font-PlayfairDisplay leading-[50px]">
								Newsletter
							</h1>
							<Link
								href="mailto:b3lla1124@gmail.com"
								className="text-black text-2xl font-normal font-Poppins">
								Subscribe to get updates
							</Link>
							<div className="w-full flex flex-col border-b border-black gap-2">
								<h1 className="text-black text-md font-Poppins">
									Enter your email
								</h1>
								<input
									type="text"
									className="bg-transparent border-none outline-none"
								/>
							</div>
						</div>
						<div className="flex items-center relative group">
							<div className="w-16 h-16 rounded-full bg-[#DD6013] group-hover:w-full transition-all duration-200 ease-linear" />
							<div className="flex items-center gap-2 absolute left-[20px]">
								<Link
									href="/"
									className="text-black text-[24px] font-medium font-PlayfairDisplay">
									Subscribe
								</Link>
								<MoveRight />
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex items-center justify-between gap-5">
					<div className="flex items-center gap-10">
						<div className="flex items-center gap-3">
							<Instagram className="text-[#BB895B]" />
							<Link
								href="tel:+16099554601"
								className="text-black text-2xl font-normal font-['Poppins'] leading-loose">
								Instagram
							</Link>
						</div>
						<div className="flex items-center gap-3">
							<Facebook className="text-[#BB895B]" />
							<Link
								href="tel:+16099554601"
								className="text-black text-2xl font-normal font-['Poppins'] leading-loose">
								Facebook
							</Link>
						</div>
						<div className="flex items-center gap-3">
							<Image
								src={pin}
								alt="pin"
								width={20}
								height={20}
								className="text-[#BB895B]"
							/>
							<Link
								href="tel:+16099554601"
								className="text-black text-2xl font-normal font-['Poppins'] leading-loose">
								Pinterest
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex items-center py-5 padding-x justify-center border-t-[1.5px] border-black">
				<h1 className="text-black text-[20px] font-Poppins">
					Copyright © 2024 Bella, LLC - All Rights Reserved.
				</h1>
			</div>
		</div>
	);
}
