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
}: Actors) => {
	return (
		<article className="flex flex-col">
			<Image
				loading="eager"
				alt={name}
				height={250}
				width={250}
				src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
			/>
			<p>{name}</p>
		</article>
	);
};

export default ActorCard;
