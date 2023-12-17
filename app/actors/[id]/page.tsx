import { fetchActors } from "@/actions/fetchMovies";
import CurrentActor from "@/components/CurrentActor";
import { ActorDetails } from "@/types/Data";

const ActorPage = async ({ params }: { params: { id: number } }) => {
	const data: ActorDetails = await fetchActors(params.id);

	// console.log(data);
	return (
		<section className=" mt-20">
			<CurrentActor {...data} />
		</section>
	);
};

export default ActorPage;
