import Feed from "@/components/Feed";
import { Data } from "@/types/Data";
const SearchPage = async ({ params }: { params: { id: number } }) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/search/movie?query=${params.id}&include_adult=true&language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`
	);
	const { results: data }: { results: Data[] } = await response.json();
	// console.log({ data });
	return (
		<>
			{data && data.length > 0 ? (
				<section className="mt-20 min-h-screen">
					<Feed data={data} />
				</section>
			) : (
				<h1 className=" mt-20 text-4xl h-screen text-center">Movie Doesnt Exist :(</h1>
			)}
		</>
	);
};

export default SearchPage;
