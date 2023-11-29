"use client";
import { Data } from "@/types/Data";
import MovieCard from "./MovieCard";

interface FeedProps {
	data: Data[];
}
const Feed = ({ data }: FeedProps) => {
	console.log(data);
	return (
		<section className="flex flex-col">
			<div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 place-items-center">
				{data?.map((movie) => (
					<MovieCard {...movie} />
				))}
			</div>
		</section>
	);
};

export default Feed;
