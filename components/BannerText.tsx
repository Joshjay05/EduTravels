import { CATEGORIES } from "@/constant";
import Container from "./Container";
import { motion } from "framer-motion";
import CategoryItems from "./CategoryItems";
import Button from "./Button";
import { CiPlane } from "react-icons/ci";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

interface Props {
	title: string;
}

const BannerText = ({ title }: Props) => {
	return (
		<div className=" hidden lg:inline-block absolute top-0 left-0 w-full h-full">
			<Container className="flex h-full  flex-col gap-y-6 justify-center">
				<motion.h2
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="lg:text-7xl md:text-base my-2 font-bold text-white">
					{title}
				</motion.h2>
				<motion.p
					initial={{ y: 40, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6 }}
					className="text-lg shadow-sm border rounded-sm bg-slate-50 text-slate-600 p-4 leading-10 font-extrabold">
					Embark on a journey that transcends borders, where every destination
					is an opportunity to explore, learn, and thrive. From enriching study
					programs to exciting work opportunities, our travel experiences offer
					the perfect blend of adventure, education, and professional growth.
					Discover the world with us and uncover endless possibilities for
					personal and professional development.
				</motion.p>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7 }}
					className="flex  gap-x-4 mt-2">
					<article className=" relative  sm:top-1/3 z-10">
						<div className="mt-8">
							<Link href="#destination">
								<Button
									type="button"
									title="Travel Plan"
									icon={FaTelegramPlane}
									variant="btn_white_rounded"
								/>
							</Link>
						</div>

						<h4 className="text-white my-4 bold-22">Explore the key points</h4>
						<ul className="flex flex-wrap gap-4">
							{CATEGORIES.map((category) => (
								<CategoryItems
									key={category.title}
									title={category.title}
									icon={category.icon}
								/>
							))}
						</ul>
					</article>
				</motion.div>
			</Container>
		</div>
	);
};

export default BannerText;
