"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Navbar = () => {
	const [value, setValue] = useState<string>("");
	const router = useRouter();
	return (
		<nav className="fixed w-full top-0 h-20 bg-secondary flex items-center font-body z-10">
			<p className=" ml-4"></p>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					router.push(`/search/${value}`);
				}}
				className="relative search-input mx-auto w-[80vw] bg-background pr-8 pl-2 py-3 rounded-lg shadow-md flex gap-4 items-center"
			>
				<button>
					<Image
						className="cursor-pointer"
						src="/search.svg"
						alt="search_icon"
						height={24}
						width={24}
					/>
				</button>
				<input
					value={value}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setValue(e.target.value)
					}
					type="text"
					className=" bg-transparent  w-full outline-none placeholder:text-text placeholder:font-body placeholder:text-md transition-all -mb-1"
					placeholder="Search for a movie..."
				/>
			</form>
		</nav>
	);
};

export default Navbar;
