"use client";
import { Data } from "@/types/Data";
import Image from "next/image";

const CurrentMovie = ({
	backdrop_path,
	id,
	original_language,
	original_title,
	overview,
	poster_path,
	release_date,
	title,
	vote_average,
	vote_count,
	genres,
}: Data) => {
	console.log({
		backdrop_path,
		id,
		original_language,
		original_title,
		overview,
		poster_path,
		release_date,
		title,
		vote_average,
		vote_count,
		genres,
	});
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 w-full place-items-center mt-8">
			<div className="relative sm:h-[550px] sm:w-[384px] w-[295px] h-[470px] rounded-2xl overflow-hidden   shadow-2xl shadow-black dark:shadow-gray-600  ">
				<Image
					alt="movie_poster"
					src={`https://image.tmdb.org/t/p/original//${poster_path}`}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col gap-y-8 items-center lg:-mt-20 mt-10 dark:text-white">
				<h1 className="lg:text-4xl text-2xl md:text-3xl font-semibold">
					{original_title}
					<span> ({release_date.substring(0, 4)})</span>
				</h1>
				<p>Rating : {vote_average}</p>
				<div className="flex items-center justify-around w-full">
					{genres.map((genre) => (
						<p className="font-semibold">{genre.name}</p>
					))}
				</div>
				<div>
					<h2 className=" text-xl">Overview</h2>
					<p className=" text-md">{overview}</p>
				</div>
				<div className="flex justify-between w-full">
					<h4>
						Language :{" "}
						<span className=" font-semibold">{original_language}</span>
					</h4>
					<h4>
						Release Date :{" "}
						<span className=" font-semibold">{release_date} </span>
					</h4>
				</div>
			</div>
		</section>
	);
};

export default CurrentMovie;
