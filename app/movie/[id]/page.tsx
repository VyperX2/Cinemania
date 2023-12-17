import CurrentMovie from "@/components/CurrentMovie";
import { Actors, Data } from "@/types/Data";

const MoviePage = async ({ params }: { params: { id: number } }) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.TMDB_API_KEY}`
	);
	const data: Data = await response.json();

	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${process.env.TMDB_API_KEY}`
	);
	const { cast } = await res.json();

	// console.log(cast);
	const actors: Actors[] = cast.slice(0, 6);
	return (
		<section className="mt-20 flex justify-center container">
			<CurrentMovie {...data} actors={actors} />
		</section>
	);
};

export default MoviePage;
