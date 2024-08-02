import Image from "next/image";
import { eyesvg, heroImg } from "@/public";
import { TextMarquee } from "@/animations";

export default function Hero() {
	return (
		<div className="w-full h-screen">
			<div className="w-full h-full flex items-center justify-center flex-col gap-5">
				<div className="flex items-center gap-3">
					<h1 className="text-[#141313] text-[288px] font-normal uppercase leading-[180px] font-BananasFont">
						bell
					</h1>
					<Image
						src={heroImg}
						alt="heroImg"
						width={250}
						height={250}
					/>
				</div>
				<div className="w-[50%] rounded-full bg-black">
					<TextMarquee baseVelocity={1}>
						<h1 className="text-primary uppercase text-[30px] font-semibold flex ">
							<span className="mx-[20px] w-[40px] h-[40px]">
								<Image
									src={eyesvg}
									alt="eyesvg"
									width={100}
									height={100}
									className="w-full object-cover h-full"
								/>
							</span>
							Creative Direction
						</h1>
						<h1 className="text-primary uppercase text-[30px] font-semibold flex items-center justify-center">
							<span className="mx-[20px] w-[40px] h-[40px]">
								<Image
									src={eyesvg}
									alt="eyesvg"
									width={100}
									height={100}
									className="w-full object-cover h-full"
								/>
							</span>
							GRAPHIC Design
						</h1>
						<h1 className="text-primary uppercase text-[30px] font-semibold flex items-center justify-center">
							<span className="mx-[20px] w-[40px] h-[40px]">
								<Image
									src={eyesvg}
									alt="eyesvg"
									width={100}
									height={100}
									className="w-full object-cover h-full"
								/>
							</span>
							ART DIRECTION
						</h1>
						<h1 className="text-primary uppercase text-[30px] font-semibold flex items-center justify-center">
							<span className="mx-[20px] w-[40px] h-[40px]">
								<Image
									src={eyesvg}
									alt="eyesvg"
									width={100}
									height={100}
									className="w-full object-cover h-full"
								/>
							</span>
							Strategic thinker
						</h1>
						<h1 className="text-primary uppercase text-[30px] font-semibold flex items-center justify-center">
							<span className="mx-[20px] w-[40px] h-[40px]">
								<Image
									src={eyesvg}
									alt="eyesvg"
									width={100}
									height={100}
									className="w-full object-cover h-full"
								/>
							</span>
							Creative Problem Solver
						</h1>
					</TextMarquee>
				</div>
				<div>
					<h1 className="text-[#141313] text-[288px] font-normal uppercase leading-[180px] font-BananasFont">
						han
					</h1>
				</div>
			</div>
		</div>
	);
}
