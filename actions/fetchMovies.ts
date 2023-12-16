"use server";
import { Data } from "@/types/Data";

export async function fetchMovies(page: number): Promise<Data[]> {
	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=${page}`,
			{ cache: "no-store" }
		);
		const results = await response.json();
		const data: Data[] = await results.results;
		return data as Data[];
	} catch (error) {
		console.error(error);
		throw error;
	}
}
