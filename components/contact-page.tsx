"use client";
import { TextMask } from "@/animations";

export default function Contact() {
	const phares1 = ["Contact Me"];
	const phares2 = ["How can i help"];
	const phares11 = ["Get In Touch"];
	const phares22 = [
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
	];

	return (
		<div className="w-full mt-20 flex flex-col items-center justify-center bg-primary gap-20">
			<div className="flex flex-col gap-2 items-center">
				<h1 className="text-[#141313] text-[180px] lg:text-[150px] md:text-[130px] xm:text-[80px] sm:text-[80px] font-normal uppercase leading-[200px] lg:leading-[180px] md:leading-none xm:leading-none sm:leading-none font-BananasFont">
					<TextMask>{phares1}</TextMask>
				</h1>
				<h1 className="w-fit p-4 text-[#BBB0D2] text-[180px] lg:text-[150px] md:text-[130px] xm:text-[80px] sm:text-[80px] font-normal uppercase leading-[150px] lg:leading-[180px] md:leading-none xm:leading-none sm:leading-none font-BananasFont">
					<TextMask>{phares2}</TextMask>
				</h1>
			</div>
			<div className="w-[80%] xm:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] padding-x py-[150px] md:py-[80px] sm:text-[40px] xm:text-[40px flex gap-6 border-4 border-white/20 bg-black rounded-[30px]">
				<div className="flex flex-1 flex-col gap-10">
					<h1 className="text-[70px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-BananasFont font-bold uppercase text-primary leading-none">
						<TextMask>{phares11}</TextMask>
					</h1>
					<h1 className="text-[20px] md:text-[18px] sm:text-[16px] xm:text-[16px] font-Poppins text-primary">
						<TextMask>{phares22}</TextMask>
					</h1>
					<button className="w-fit px-[55px] md:px-[30px] md:py-[15px] py-[24px] bg-[#BBB0D2] justify-center items-center text-white text-[24px] md:text-[20px] sm:text-[17px] xm:text-[17px font-medium font-PlayfairDisplay leading-[33px]">
						Download my resume
					</button>
				</div>
				<div className="flex flex-1 flex-col gap-10">
					<div className="w-full flex flex-col border-b border-pritext-primary gap-2">
						<h1 className="text-primary text-md font-Poppins text-[22px]">
							Name
						</h1>
						<input
							type="text"
							className="bg-transparent border-none outline-none text-primary text-[18px] pb-1"
						/>
					</div>
					<div className="w-full flex flex-col border-b border-pritext-primary gap-2">
						<h1 className="text-primary text-md font-Poppins text-[22px]">
							Email
						</h1>
						<input
							type="text"
							className="bg-transparent border-none outline-none text-primary text-[18px] pb-1"
						/>
					</div>
					<div className="w-full flex flex-col border-b border-pritext-primary gap-2">
						<h1 className="text-primary text-md font-Poppins text-[22px]">
							Phone
						</h1>
						<input
							type="text"
							className="bg-transparent border-none outline-none text-primary text-[18px] pb-1"
						/>
					</div>
					<div className="w-full flex flex-col border-b border-pritext-primary gap-2">
						<h1 className="text-primary text-md font-Poppins text-[22px]">
							Message
						</h1>
						<input
							type="text"
							className="bg-transparent border-none outline-none text-primary text-[18px] pb-1"
						/>
					</div>
					<button className="w-fit px-[55px] md:px-[30px] md:py-[15px] py-[24px] bg-[#BBB0D2] justify-center items-center text-white text-[24px] md:text-[20px] sm:text-[17px] xm:text-[17px font-medium font-PlayfairDisplay leading-[33px]">
						Submit Now
					</button>
				</div>
			</div>
		</div>
	);
}
