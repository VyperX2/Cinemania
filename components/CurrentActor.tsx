import { ActorDetails } from "@/types/Data";

const CurrentActor = ({
	also_known_as,
	biography,
	birthday,
	homepage,
	name,
	profile_path,
}: ActorDetails) => {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 place-items-center pt-12 min-h-screen w-full overflow-hidden container ">
			<img
				src={`https://image.tmdb.org/t/p/original//${profile_path}`}
				alt={name}
				className="sm:h-[550px] sm:w-[384px] w-[295px] h-[470px] rounded-2xl overflow-hidden  shadow-2xl shadow-black dark:shadow-gray-600 lg:-mt-24 lg:mr-20 2xl:mr-0 object-cover"
			/>

			<div className=" mt-8 lg:mt-0">
				<h1 className="lg:text-4xl text-2xl md:text-3xl font-semibold text-center">
					{name.substring(0, 30)}
				</h1>

				{/* <h2 className=" text-2xl">Overview</h2> */}
				<p className=" text-md">{biography}</p>
			</div>
		</section>
	);
};

export default CurrentActor;
