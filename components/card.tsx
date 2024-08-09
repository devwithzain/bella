import Image from "next/image";
import {
	afterEffect,
	autodesk,
	illustration,
	indesign,
	photoshop,
} from "@/public";
import { TextMask } from "@/animations";

export default function Card() {
	const phares1 = [`My \n Skills`];
	const phares2 = ["01"];
	const phares3 = [`Fusion \n 360`];
	const phares4 = ["02"];
	const phares5 = ["After Effect"];
	const phares6 = ["03"];
	const phares7 = ["Illustrator"];
	const phares8 = ["04"];
	const phares9 = ["Phtoshop"];
	const phares10 = ["05"];
	const phares11 = ["Indesign"];
	const phares12 = ["06"];
	const phares13 = ["SoldWorks"];
	return (
		<>
			<div className="h-full w-full relative shrink-0 bg-primary">
				<div className="w-full h-full absolute inset-0 z-10 flex justify-between">
					<div className="w-full h-full flex items-center justify-between">
						<div className="w-full h-full items-end p-10 flex flex-1">
							<h1 className="text-[120px] lg:text-[100px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-BananasFont font-extrabold uppercase text-[#2E2E2E] leading-none">
								<TextMask>{phares1}</TextMask>
							</h1>
						</div>
						<div className="w-full h-full p-10 flex justify-center flex-1 items-center">
							<div className="w-[350px] h-[350px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] rounded-full border-4 border-black flex items-center justify-center bg-[#EBDDC6]">
								<Image
									className="lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] "
									src={autodesk}
									alt="Image"
									width={150}
									height={150}
								/>
							</div>
						</div>
						<div className="w-full h-full p-10 flex flex-1 items-start">
							<div className="flex flex-col items-center">
								<h1 className="text-[#2E2E2E]/20 text-[232px] lg:text-[100px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-none  -mb-10 lg:mb-0 md:mb-0">
									<TextMask>{phares2}</TextMask>
								</h1>
								<h1 className="text-[120px] lg:text-[100px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-BananasFont font-extrabold uppercase text-[#2E2E2E] leading-none">
									<TextMask>{phares3}</TextMask>
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-[60%] h-full flex-col flex items-center justify-between bg-primary shrink-0">
				<div className="w-full h-full flex items-center justify-center flex-col gap-4">
					<div className="w-[350px] h-[350px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] rounded-full border-4 border-black flex items-center justify-center bg-[#EBDDC6]">
						<Image
							className="lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] "
							src={afterEffect}
							alt="Image"
							width={200}
							height={200}
						/>
					</div>
					<div className="flex flex-col items-center">
						<h1 className="text-[#2E2E2E]/20 text-[232px] lg:text-[100px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-none  -mb-10 lg:mb-0 md:mb-0">
							<TextMask>{phares4}</TextMask>
						</h1>
						<h1 className="text-[120px] lg:text-[100px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-BananasFont font-extrabold uppercase text-[#2E2E2E] leading-none">
							<TextMask>{phares5}</TextMask>
						</h1>
					</div>
				</div>
			</div>
			<div className="w-[60%] h-full flex-col flex items-center justify-between bg-primary shrink-0">
				<div className="w-full h-full flex items-center justify-center flex-col gap-4">
					<div className="flex flex-col items-center">
						<h1 className="text-[#2E2E2E]/20 text-[232px] lg:text-[100px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-none  -mb-10 lg:mb-0 md:mb-0">
							<TextMask>{phares6}</TextMask>
						</h1>
						<h1 className="text-[120px] lg:text-[100px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-BananasFont font-extrabold uppercase text-[#2E2E2E] leading-none">
							<TextMask>{phares7}</TextMask>
						</h1>
					</div>
					<div className="w-[350px] h-[350px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] rounded-full border-4 border-black flex items-center justify-center bg-[#EBDDC6]">
						<Image
							className="lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] "
							src={illustration}
							alt="Image"
							width={200}
							height={200}
						/>
					</div>
				</div>
			</div>
			<div className="w-[60%] h-full flex-col flex items-center justify-between bg-primary shrink-0">
				<div className="w-full h-full flex items-center justify-center flex-col gap-4">
					<div className="w-[350px] h-[350px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] rounded-full border-4 border-black flex items-center justify-center bg-[#EBDDC6]">
						<Image
							className="lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] "
							src={photoshop}
							alt="Image"
							width={200}
							height={200}
						/>
					</div>
					<div className="flex flex-col items-center">
						<h1 className="text-[#2E2E2E]/20 text-[232px] lg:text-[100px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-none  -mb-10 lg:mb-0 md:mb-0">
							<TextMask>{phares8}</TextMask>
						</h1>
						<h1 className="text-[120px] lg:text-[100px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-BananasFont font-extrabold uppercase text-[#2E2E2E] leading-none">
							<TextMask>{phares9}</TextMask>
						</h1>
					</div>
				</div>
			</div>
			<div className="w-[60%] h-full flex-col flex items-center justify-between bg-primary shrink-0">
				<div className="w-full h-full flex items-center justify-center flex-col gap-4">
					<div className="flex flex-col items-center">
						<h1 className="text-[#2E2E2E]/20 text-[232px] lg:text-[100px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-none  -mb-10 lg:mb-0 md:mb-0">
							<TextMask>{phares10}</TextMask>
						</h1>
						<h1 className="text-[120px] lg:text-[100px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-BananasFont font-extrabold uppercase text-[#2E2E2E] leading-none">
							<TextMask>{phares11}</TextMask>
						</h1>
					</div>
					<div className="w-[350px] h-[350px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] rounded-full border-4 border-black flex items-center justify-center bg-[#EBDDC6]">
						<Image
							className="lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] "
							src={indesign}
							alt="Image"
							width={200}
							height={200}
						/>
					</div>
				</div>
			</div>
			<div className="w-[60%] h-full flex-col flex items-center justify-between bg-primary shrink-0">
				<div className="w-full h-full flex items-center justify-center flex-col gap-4">
					<div className="w-[350px] h-[350px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] rounded-full border-4 border-black flex items-center justify-center bg-[#EBDDC6]">
						<Image
							className="lg:w-[100px] lg:h-[100px] md:w-[100px] md:h-[100px] "
							src={photoshop}
							alt="Image"
							width={200}
							height={200}
						/>
					</div>
					<div className="flex flex-col items-center">
						<h1 className="text-[#2E2E2E]/20 text-[232px] lg:text-[100px] md:text-[70px] sm:text-[40px] xm:text-[40px] font-extrabold leading-none -mb-10 lg:mb-0 md:mb-0">
							<TextMask>{phares12}</TextMask>
						</h1>
						<h1 className="text-[120px] lg:text-[100px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-BananasFont font-extrabold uppercase text-[#2E2E2E] leading-none">
							<TextMask>{phares13}</TextMask>
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}
