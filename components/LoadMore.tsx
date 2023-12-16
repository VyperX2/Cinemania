"use client";
import { useInView } from "react-intersection-observer";
import { fetchMovies } from "@/actions/fetchMovies";
import { Data } from "@/types/Data";
import { useEffect, useState } from "react";
import Feed from "./Feed";

const LoadMore = () => {
	const [data, setData] = useState<Data[]>([]);
	const [page, setPage] = useState(2);

	const { ref, inView } = useInView();

	async function fetchMore(page: number) {
		const moreMovies = await fetchMovies(page);
		return moreMovies;
	}

	const handleLoad = async () => {
		setTimeout(async () => {
			setPage(page + 1);
			const newMovies = (await fetchMore(page)) ?? [];
			setData((prevMovies: Data[]) => [...prevMovies, ...newMovies]);
		}, 2000);
	};
	useEffect(() => {
		if (inView) {
			handleLoad();
		}
	}, [inView]);
	return (
		<section className=" pb-6">
			<Feed data={data} />
			<div ref={ref}>
				<svg
					className="block mx-auto"
					xmlns="http://www.w3.org/2000/svg"
					width="64"
					height="64"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
						opacity=".25"
					/>
					<path
						fill="currentColor"
						d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
					>
						<animateTransform
							attributeName="transform"
							dur="0.75s"
							repeatCount="indefinite"
							type="rotate"
							values="0 12 12;360 12 12"
						/>
					</path>
				</svg>
			</div>
		</section>
	);
};

export default LoadMore;
