import { Data } from "@/types/Data";
import Feed from "@/components/Feed";
import MoviePoster from "@/components/MoviePoster";

export default async function Home() {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
		{ cache: "no-store" }
	);
	const results = await response.json();
	const data: Data[] = await results.results;
	const firstMovie = data[0];

	const remainingMovies = data.filter(
		(movie) => JSON.stringify(movie) !== JSON.stringify(firstMovie)
	);

	return (
		<main className="mt-20">
			<MoviePoster posterMovie={firstMovie} />
			<Feed data={remainingMovies} />
		</main>
	);
}
