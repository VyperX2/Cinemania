import Feed from "@/components/Feed";
import React from "react";

const SearchPage = async ({ params }: { params: { id: number } }) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/search/movie?query=${params.id}&include_adult=true&language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`
	);
	const { results } = await response.json();
	console.log(results);
	return (
		<section className="mt-20">
			<Feed data={results} />
		</section>
	);
};

export default SearchPage;
