"use client";
import { Data } from "@/types/Data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { easeIn, motion } from "framer-motion";

const MovieCard = ({ id, poster_path, title, i }: Data & { i: number }) => {
	const router = useRouter();
	// Todo Fix the title wrap

	return (
		<motion.article
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1, transition: { ease: easeIn } }}
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
			<h4 className=" text-xl text-center">
				{title.length > 18 ? `${title.substring(0, 18)}...` : title}
			</h4>
		</motion.article>
	);
};

export default MovieCard;
