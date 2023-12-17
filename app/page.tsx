import { Data } from "@/types/Data";
import Feed from "@/components/Feed";
import MoviePoster from "@/components/MoviePoster";
import { fetchMovies } from "@/actions/fetchMovies";
import LoadMore from "@/components/LoadMore";

export default async function Home() {

	const data = await fetchMovies(1);
	const firstMovie = data[0];
	const remainingMovies = data.filter(
		(movie) => JSON.stringify(movie) !== JSON.stringify(firstMovie)
	);

	return (
		<main className="mt-20">
			<MoviePoster posterMovie={firstMovie} />
			<Feed data={remainingMovies} />
      <LoadMore />
		</main>
	);
}
