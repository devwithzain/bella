"use client";
import axios from "axios";
import { Form } from "@/components";
import { motion } from "framer-motion";
import { TextMask } from "@/animations";
import { useEffect, useState } from "react";
import {
	TpageContactFormProps,
	TpageContactProps,
	TpageContactResumeProps,
} from "@/types";
import Link from "next/link";

export default function Contact() {
	const [data, setData] = useState<TpageContactProps[]>([]);
	const [data1, setData1] = useState<TpageContactFormProps[]>([]);
	const [data2, setData2] = useState<TpageContactResumeProps[]>([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/api/contact/hero");
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchData();
	}, []);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/api/contact/form");
				setData1(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/api/contact/resume");
				setData2(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchData();
	}, []);

	return (
		<div className="w-full min-h-screen mt-20 flex flex-col justify-center bg-primary gap-20 padding-x">
			{data.map((item) => (
				<div
					className="flex flex-col gap-2"
					key={item.id}>
					<h1 className="text-[#141313] text-[180px] lg:text-[130px] md:text-[100px] xm:text-[50px] sm:text-[50px] font-normal uppercase leading-[200px] lg:leading-[110px] md:leading-none xm:leading-none sm:leading-none font-BananasFont">
						<TextMask>{[item.title]}</TextMask>
					</h1>
					<h1 className="w-fit text-[#BBB0D2] text-[180px] lg:text-[130px] md:text-[100px] xm:text-[50px] sm:text-[50px] font-normal uppercase leading-[150px] lg:leading-[110px] md:leading-none xm:leading-none sm:leading-none font-BananasFont">
						<TextMask>{[item.heading]}</TextMask>
					</h1>
				</div>
			))}
			<motion.div
				initial={{ opacity: 0, x: -300 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1, ease: "linear", delay: 1.5 }}
				viewport={{ once: true }}
				className="w-full padding-x py-[120px] lg:py-[100px] md:py-[80px] xm:py-[40px] sm:py-[40px] flex gap-6 border-4 border-white/20 bg-black rounded-[30px] xm:flex-col sm:flex-col">
				<div className="flex flex-1 flex-col gap-5">
					{data1.map((item) => (
						<div
							className="flex flex-col gap-3"
							key={item.id}>
							<h1 className="text-[70px] md:text-[50px] sm:text-[40px] xm:text-[40px] font-BananasFont font-bold uppercase text-primary leading-none">
								<TextMask>{[item.title]}</TextMask>
							</h1>
							<h1 className="text-[20px] md:text-[18px] sm:text-[16px] xm:text-[16px] font-Poppins text-primary">
								<TextMask>{[item.paragraph]}</TextMask>
							</h1>
						</div>
					))}
					{data2.map((item) => (
						<motion.div
							key={item.id}
							className="w-full overflow-hidden"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
							viewport={{ once: true }}>
							<button className="px-7 py-4 bg-[#BBB0D2] text-white text-[20px] font-medium font-Poppins leading-tight">
								<Link
									href={item.resume}
									download
									target="_blank">
									Download Resume
								</Link>
							</button>
						</motion.div>
					))}
				</div>
				<Form />
			</motion.div>
		</div>
	);
}
