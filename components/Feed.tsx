import { Data } from "@/types/Data";
import MovieCard from "./MovieCard";

interface FeedProps {
	data: Data[];
}
const Feed = ({ data }: FeedProps) => {
	return (
		<section className="flex flex-col container">
			<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 place-items-center">
				{data?.map((movie, index) => (
					<MovieCard key={movie.id} i={index} {...movie} />
				))}
			</div>
		</section>
	);
};

export default Feed;
