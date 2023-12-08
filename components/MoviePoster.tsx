const MoviePoster = ({ posterMovie }) => {
	return (
		<div className="container pt-8">
			<div>
				<div
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/original//${posterMovie.backdrop_path})`,
					}}
					className=" mx-auto 2xl:w-[95%] lg:w-[90%] md:w-[84%] w-[75%] md:h-[450px] h-64 bg-cover bg-center rounded-md relative cursor-pointer poster overflow-hidden "
				>
					<div className=" absolute w-full h-full bg-black/30" />
					<div className=" absolute bottom-3 flex flex-col left-3 ">
						<h4 className=" text-lg md:text-3xl text-white">
							{posterMovie.original_title}
						</h4>
						<h4 className=" text-sm md:w-[50%] w-full text-white">
							{posterMovie.overview}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoviePoster;
