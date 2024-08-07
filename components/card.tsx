import Image from "next/image";
import {
	afterEffect,
	autodesk,
	illustration,
	indesign,
	photoshop,
} from "@/public";

export default function Card() {
	return (
		<>
			<div className="h-full w-full relative shrink-0 bg-primary">
				<div className="w-full h-full absolute inset-0 z-10 flex justify-between">
					<div className="w-full h-full flex items-center justify-between">
						<div className="w-full h-full items-end p-10 flex flex-1">
							<h1 className="text-[120px] font-BananasFont font-extrabold uppercase text-[#2E2E2E] leading-none">
								My <br /> Skills
							</h1>
						</div>
						<div className="w-full h-full p-10 flex justify-center flex-1 items-center">
							<div className="w-[350px] h-[350px] rounded-full border-4 border-black flex items-center justify-center bg-[#EBDDC6]">
								<Image
									src={autodesk}
									alt="Image"
									width={150}
									height={150}
								/>
							</div>
						</div>
						<div className="w-full h-full p-10 flex flex-1 items-start">
							<div className="flex flex-col items-center">
								<h1 className="text-[#2E2E2E]/20 text-[232.009px] font-extrabold leading-none  -mb-10">
									01
								</h1>
								<h1 className="text-[120px] font-BananasFont font-extrabold uppercase text-[#2E2E2E] leading-none">
									Fusion <br /> 360
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-[60%] h-full flex-col flex items-center justify-between bg-primary shrink-0">
				<div className="w-full h-full flex items-center justify-center flex-col gap-4">
					<div className="w-[350px] h-[350px] rounded-full border-4 border-black flex items-center justify-center bg-[#EBDDC6]">
						<Image
							src={afterEffect}
							alt="Image"
							width={200}
							height={200}
						/>
					</div>
					<div className="flex flex-col items-center">
						<h1 className="text-[#2E2E2E]/20 text-[232.009px] font-extrabold leading-none  -mb-10">
							02
						</h1>
						<h1 className="text-[120px] font-BananasFont font-extrabold uppercase text-[#2E2E2E] leading-none">
							After Effect
						</h1>
					</div>
				</div>
			</div>
			<div className="w-[60%] h-full flex-col flex items-center justify-between bg-primary shrink-0">
				<div className="w-full h-full flex items-center justify-center flex-col gap-4">
					<div className="flex flex-col items-center">
						<h1 className="text-[#2E2E2E]/20 text-[232.009px] font-extrabold leading-none  -mb-10">
							03
						</h1>
						<h1 className="text-[120px] font-BananasFont font-extrabold uppercase text-[#2E2E2E] leading-none">
							Illustrator
						</h1>
					</div>
					<div className="w-[350px] h-[350px] rounded-full border-4 border-black flex items-center justify-center bg-[#EBDDC6]">
						<Image
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
					<div className="w-[350px] h-[350px] rounded-full border-4 border-black flex items-center justify-center bg-[#EBDDC6]">
						<Image
							src={photoshop}
							alt="Image"
							width={200}
							height={200}
						/>
					</div>
					<div className="flex flex-col items-center">
						<h1 className="text-[#2E2E2E]/20 text-[232.009px] font-extrabold leading-none  -mb-10">
							04
						</h1>
						<h1 className="text-[120px] font-BananasFont font-extrabold uppercase text-[#2E2E2E] leading-none">
							Phtoshop
						</h1>
					</div>
				</div>
			</div>
			<div className="w-[60%] h-full flex-col flex items-center justify-between bg-primary shrink-0">
				<div className="w-full h-full flex items-center justify-center flex-col gap-4">
					<div className="flex flex-col items-center">
						<h1 className="text-[#2E2E2E]/20 text-[232.009px] font-extrabold leading-none  -mb-10">
							05
						</h1>
						<h1 className="text-[120px] font-BananasFont font-extrabold uppercase text-[#2E2E2E] leading-none">
							Indesign
						</h1>
					</div>
					<div className="w-[350px] h-[350px] rounded-full border-4 border-black flex items-center justify-center bg-[#EBDDC6]">
						<Image
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
					<div className="w-[350px] h-[350px] rounded-full border-4 border-black flex items-center justify-center bg-[#EBDDC6]">
						<Image
							src={photoshop}
							alt="Image"
							width={200}
							height={200}
						/>
					</div>
					<div className="flex flex-col items-center">
						<h1 className="text-[#2E2E2E]/20 text-[232.009px] font-extrabold leading-none -mb-10">
							06
						</h1>
						<h1 className="text-[120px] font-BananasFont font-extrabold uppercase text-[#2E2E2E] leading-none">
							SoldWorks
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}
