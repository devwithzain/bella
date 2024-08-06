import Image from "next/image";
import { portfolioItem } from "@/constants";

export default function Portfolio() {
	return (
		<div className="w-full h-screen">
			<div className="w-full flex flex-col gap-10">
				<div className="w-full flex items-center py-5 justify-center bg-[#DD6013]">
					<h1 className="text-[120px] font-BananasFont font-extrabold uppercase text-white leading-none">
						Portfolios
					</h1>
				</div>
				<div className="w-full flex items-center gap-10 justify-center">
					{portfolioItem.map((item) => (
						<div
							key={item.id}
							className="w-[300px] h-[700px] rounded-full flex items-center justify-center relative group shrink-0 cursor-pointer">
							<div className="w-full h-full bg-black/20 backdrop-blur-sm absolute flex transition-opacity duration-500 ease-in-out group-hover:opacity-0 top-0 left-0 rounded-full z-10" />
							<div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-transform duration-500 ease-in-out group-hover:scale-110">
								<h1 className="text-[25px] text-center font-Poppins font-semibold uppercase text-white group-hover:text-black transition-colors duration-500 ease-in-out">
									{item.title}
								</h1>
							</div>
							<Image
								src={item.src}
								alt=""
								className="w-full h-full object-cover rounded-full"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
