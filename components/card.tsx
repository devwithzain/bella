import Image from "next/image";
import { sliderItem } from "@/constants";

export default function Card() {
	return (
		<>
			{sliderItem.map((item) => (
				<div
					key={item.id}
					className="h-full w-[1000px] relative bg-[#1F201D]">
					<div className="w-full h-full absolute inset-0 z-10 flex items-start flex-col border-l border-[#867D71] p-14 gap-6">
						<div className="w-full flex items-center justify-between gap-2">
							<h1 className="text-[80px] font-BananasFont uppercase text-[#DBCAB6]">
								{item.id}.
							</h1>
							<Image
								src={item.src}
								alt="seamless"
								width={100}
								height={100}
							/>
						</div>
						{item.id == 1 && (
							<h1 className="text-[60px] font-BananasFont uppercase text-[#DBCAB6] leading-none">
								Seamless, <br /> Responsive <br /> Supply Chain and <br />
								Distribution <br />
								Network
							</h1>
						)}
						{item.id == 2 && (
							<h1 className="text-[60px] font-BananasFont uppercase text-[#DBCAB6] leading-none">
								Elevating <br /> Everyday <br /> Products with <br /> Renewable{" "}
								<br /> Materials
							</h1>
						)}
						{item.id == 3 && (
							<h1 className="text-[60px] font-BananasFont uppercase text-[#DBCAB6] leading-none">
								About <br /> MeAward-Winning <br /> INNOVATION
							</h1>
						)}
						<p className="text-[18px] font-Poppins text-[#867D71]">
							{item.para}
						</p>
						<button className="text-[16px] font-Poppins text-[#DD6013]">
							{item.btn}
						</button>
					</div>
				</div>
			))}
		</>
	);
}
