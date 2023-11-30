export interface Data {
	id: number;
	backdrop_path: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string;
	release_date: string;
	title: string;
	vote_average: number;
	vote_count: number;
	genres: { id: number; name: string }[];
}

export interface Actors {
	id: number;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
	credit_id: number;
	order: number;
}
