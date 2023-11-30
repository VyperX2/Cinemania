"use client";
import { Actors, Data } from "@/types/Data";
import Image from "next/image";
import ActorCard from "./ActorCard";

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
	actors,
}: Data & { actors: Actors[] }) => {
	console.log(actors);
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 w-full place-items-center mt-8">
			<div className="relative sm:h-[550px] sm:w-[384px] w-[295px] h-[470px] rounded-2xl overflow-hidden   shadow-2xl shadow-black dark:shadow-gray-600  ">
				<img
					alt="movie_poster"
					src={`https://image.tmdb.org/t/p/original//${poster_path}`}
					// fill
					sizes="100%"
					style={{ objectFit: "cover" }}
					loading="eager"
					// nextjs Image is taking too long to load! Will fix it later
				/>
			</div>
			<div className="flex flex-col gap-y-8  lg:-mt-20 mt-10 dark:text-white">
				<h1 className="lg:text-4xl text-2xl md:text-3xl font-semibold text-center whitespace-nowrap">
					{original_title}
					<span> ({release_date.substring(0, 4)})</span>
				</h1>
				<p className="text-center">Rating : {vote_average}</p>
				<div className="flex items-center justify-around w-full">
					{genres.map((genre) => (
						<p className="font-semibold">{genre.name}</p>
					))}
				</div>
				<div>
					<h2 className=" text-2xl">Overview</h2>
					<p className=" text-md">{overview}</p>
				</div>
				<h6 className="text-2xl">Top Cast</h6>
				<div className=" flex flex-wrap">
					{actors.map((actor) => (
						<ActorCard key={actor.id} {...actor} />
					))}
				</div>

				{/* <div className="flex justify-between w-full">
					<h4>
						Language :{" "}
						<span className=" font-semibold">{original_language}</span>
					</h4>
					<h4>
						Release Date :{" "}
						<span className=" font-semibold">{release_date} </span>
					</h4>
				</div> */}
			</div>
		</section>
	);
};

export default CurrentMovie;
