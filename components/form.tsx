"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, TcontactFormData } from "@/types";

export default function Form() {
	const phares3 = ["Name*"];
	const phares4 = ["Email*"];
	const phares5 = ["Phone*"];
	const phares6 = ["Message*"];

	const {
		register,
		reset,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<TcontactFormData>({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmits = async (data: TcontactFormData) => {
		try {
			await axios.post("/api/send", data);
		} catch (error: any) {
			toast.error("Something went wrong!", error);
		} finally {
			toast.success("Thanks for contacting me!");
			reset();
		}
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmits)}
			className="flex flex-1 flex-col gap-5">
			<div className="w-full flex flex-col border-b border-pritext-primary gap-2">
				<h1 className="text-primary text-md font-Poppins text-[20px]">
					<TextMask>{phares3}</TextMask>
				</h1>
				<input
					type="text"
					className="bg-transparent border-none focus:bg-transparent outline-none text-primary text-[16px] pb-1"
					{...register("name")}
				/>
			</div>
			{errors.name && (
				<span className="text-red-500">{errors.name.message}</span>
			)}
			<div className="w-full flex flex-col border-b border-pritext-primary gap-2">
				<h1 className="text-primary text-md font-Poppins text-[20px]">
					<TextMask>{phares4}</TextMask>
				</h1>
				<input
					type="email"
					className="bg-transparent border-none focus:bg-transparent outline-none text-primary text-[16px] pb-1"
					{...register("email")}
				/>
			</div>
			{errors.email && (
				<span className="text-red-500">{errors.email.message}</span>
			)}
			<div className="w-full flex flex-col border-b border-pritext-primary gap-2">
				<h1 className="text-primary text-md font-Poppins text-[20px]">
					<TextMask>{phares5}</TextMask>
				</h1>
				<input
					type="text"
					className="bg-transparent border-none focus:bg-transparent outline-none text-primary text-[16px] pb-1"
					{...register("phone")}
				/>
			</div>
			{errors.phone && (
				<span className="text-red-500">{errors.phone.message}</span>
			)}
			<div className="w-full flex flex-col border-b border-pritext-primary gap-2">
				<h1 className="text-primary text-md font-Poppins text-[20px]">
					<TextMask>{phares6}</TextMask>
				</h1>
				<input
					type="text"
					className="bg-transparent border-none focus:bg-transparent outline-none text-primary text-[16px] pb-1"
					{...register("message")}
				/>
			</div>
			{errors.message && (
				<span className="text-red-500">{errors.message.message}</span>
			)}
			<motion.div
				className="w-full overflow-hidden"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}>
				<input
					type="submit"
					value={`${isSubmitting ? "Loading..." : "Submit"}`}
					className="w-fit px-7 py-4 bg-[#BBB0D2] text-white text-[20px] font-medium font-Poppins leading-tight cursor-pointer"
					disabled={isSubmitting}
				/>
			</motion.div>
		</form>
	);
}
