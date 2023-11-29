import { Data } from "@/types/Data";
import Feed from "@/components/Feed";

export default async function Home() {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}` , {cache : "no-store"}
	);
	const results = await response.json();
	const data: Data[] = await results.results;

	return (
		<main className="">
			<Feed data={data} />
		</main>
	);
}
