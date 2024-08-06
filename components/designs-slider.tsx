import { dragImg } from "@/public";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function DesignsSlider() {
	return (
		<div className="w-full px-20 py-10">
			<div className="rounded-lg relative w-full flex items-center justify-center">
				<div className="w-40 h-40 rounded-full flex-col absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 backdrop-blur-sm bg-white/20 flex items-center justify-center cursor-pointer">
					<ArrowUp
						size={20}
						className="text-white"
					/>
					<p className=" text-white text-lg">Drag Now</p>
				</div>
				<Image
					src={dragImg}
					alt="dragImg"
					width={400}
					height={800}
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
}
