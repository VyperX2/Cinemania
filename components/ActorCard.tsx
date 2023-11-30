import { Actors } from "@/types/Data";
import Image from "next/image";
const ActorCard = ({
	credit_id,
	id,
	name,
	order,
	original_name,
	popularity,
	profile_path,
	character,
}: Actors) => {
	return (
		<article className="flex flex-col">
			<img
				loading="eager"
				alt={name}
				// height={160}
				// width={180}
				className=" w-36 h-40 object-cover rounded-lg object-center"
				src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
			/>
			<p className="text-center mt-1">{name}</p>
			<p className="text-center text-gray-500">{character}</p>
		</article>
	);
};

export default ActorCard;
