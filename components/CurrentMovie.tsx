"use client";
import { Actors, Data } from "@/types/Data";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";
import ActorCard from "./ActorCard";

const CurrentMovie = ({
	original_title,
	overview,
	poster_path,
	release_date,
	vote_average,
	genres,
	actors,
}: Data & { actors: Actors[] }) => {
	console.log(actors);
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 w-full place-items-center mt-8 h-screen ">
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 , transition : { delay : 0.22 , ease : easeIn} }}
				className="relative sm:h-[550px] sm:w-[384px] w-[295px] h-[470px] rounded-2xl overflow-hidden   shadow-2xl shadow-black dark:shadow-gray-600 lg:-mt-24 lg:mr-20 2xl:mr-0  "
			>
				<motion.img
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					alt="movie_poster"
					src={`https://image.tmdb.org/t/p/original//${poster_path}`}
					// fill
					sizes="100%"
					style={{ objectFit: "cover" }}
					loading="eager"
					// nextjs Image is taking too long to load! Will fix it later
				/>
			</motion.div>
			<div className="flex flex-col gap-y-8   mt-10">
				<h1 className="lg:text-4xl text-2xl md:text-3xl font-semibold text-center whitespace-nowrap">
					{original_title.substring(0, 30)}
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
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:place-items-start place-items-center">
					{actors.map((actor, index) => (
						<ActorCard i={index} key={actor.id} {...actor} />
					))}
				</div>
			</div>
		</section>
	);
};

export default CurrentMovie;
