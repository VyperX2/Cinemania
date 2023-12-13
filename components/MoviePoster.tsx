"use client";
import { Data } from "@/types/Data";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useEffect } from "react";

const MoviePoster = ({ posterMovie }: { posterMovie: Data }) => {
	useEffect(() => {
		// gsap.to(".anim1", { scale : 0 , opacity : 0 });
		gsap.from(".anim1", { opacity: 0, duration: 1, y: -50 });
	}, []);
	gsap.from(".anim1", { opacity: 0, duration: 1 });
	// console.log("THIS IS A POSTER ", { posterMovie });
	const router = useRouter();
	return (
		<div
			onClick={() => router.push(`/movie/${posterMovie.id}`)}
			className="container pt-8 anim1"
		>
			<div>
				<div
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/original//${posterMovie.backdrop_path})`,
					}}
					className=" mx-auto 2xl:w-[95%] lg:w-[90%] md:w-[84%] w-[75%] md:h-[450px] h-64 bg-cover bg-center rounded-md relative cursor-pointer poster overflow-hidden "
				>
					<div className=" absolute w-full h-full bg-black/30" />
					<div className=" absolute bottom-3 flex flex-col left-3 ">
						<h4 className=" text-lg md:text-3xl text-white mb-2">
							{posterMovie.original_title}
						</h4>
						<h4 className=" text-sm md:w-[50%] w-full text-white hidden sm:block ">
							{posterMovie.overview}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoviePoster;
