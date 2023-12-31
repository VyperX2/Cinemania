import { Actors } from "@/types/Data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { easeIn, motion } from "framer-motion";
const ActorCard = ({
	id,
	name,
	profile_path,
	character,
	i,
}: Actors & { i: number }) => {
	const router = useRouter();
  // 56446
	// console.log(id);
	return (
		<motion.article
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1, transition: { delay: i * 0.15 } }}
			onClick={() => router.push(`/actors/${id}`)}
			className="flex flex-col cursor-pointer"
		>
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
		</motion.article>
	);
};

export default ActorCard;
