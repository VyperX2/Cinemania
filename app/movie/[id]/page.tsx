import CurrentMovie from "@/components/CurrentMovie";
import { Data } from "@/types/Data";

const MoviePage = async ({ params }: { params: { id: number } }) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.TMDB_API_KEY}`
	);
	const data: Data = await response.json();
	return (
		<section className="mt-20 flex justify-center container">
			<CurrentMovie {...data} />
		</section>
	);
};

export default MoviePage;
