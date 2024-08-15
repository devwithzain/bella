import Image from "next/image";
import { motion } from "framer-motion";
import { lifeCycle } from "@/public";

export default function LifeCycle() {
	return (
		<div className="w-full py-10 padding-x">
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 1,
					easee: "easeInOut",
					type: "spring",
				}}
				viewport={{ once: true }}
				className="w-full h-full">
				<Image
					src={lifeCycle}
					alt="hotelImg"
					className="w-full h-full object-cover"
				/>
			</motion.div>
		</div>
	);
}
