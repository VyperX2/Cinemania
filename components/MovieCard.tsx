'use client'
import { Data } from "@/types/Data";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MovieCard = ({
	id,
	backdrop_path,
	original_language,
	original_title,
	overview,
	poster_path,
	release_date,
	title,
	vote_average,
	vote_count,
}: Data) => {
	const router = useRouter();

	return (
		<article
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
		</article>
	);
};

export default MovieCard;
