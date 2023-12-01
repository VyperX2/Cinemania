"use client";
import { Data } from "@/types/Data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { animate, motion } from "framer-motion";

const MovieCard = ({ id, poster_path, title, i }: Data & { i: number }) => {
	setTimeout(() => window.scrollTo(0, 0), 0);
	// Scale property was causing the window to scroll to the center
	const router = useRouter();
	// Todo Fix the title wrap
	const fadeInAnimationVariants = {
		initial: { opacity: 0, scale: 0 },
		animate: {
			opacity: 100,
			scale: 1,
			transition: { delay: i * 0.05, ease: "easeInOut" },
		},
	};
	// TODO Animate on scroll and remove the delay for scroll

	return (
		<motion.article
			variants={fadeInAnimationVariants}
			initial="initial"
			animate="animate"
			viewport={{ once: true }}
			onClick={() => router.push(`/movie/${id}`)}
			className="flex flex-col w-60 items-center py-4 gap-2 overflow-hidden max-h-[450px]"
		>
			<Image
				src={`https://image.tmdb.org/t/p/original//${poster_path}`}
				alt=" "
				width={208}
				height={311}
				className=" w-52 object-cover rounded-lg hover:scale-[1.05] mb-1 cursor-pointer transition-all"
			/>
			<h4 className=" text-xl text-center whitespace-nowrap">
				{title.substring(0, 27)}
			</h4>
		</motion.article>
	);
};

export default MovieCard;
