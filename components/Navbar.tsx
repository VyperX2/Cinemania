"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Navbar = () => {
	const [value, setValue] = useState<string>("");
	const router = useRouter();
	return (
		<nav className="fixed w-full top-0 h-20 gap-4 bg-secondary flex items-center font-body z-10 px-6">
			<h4 onClick={() => router.push("/")} className="  text-xl cursor-pointer">
				CINEMANIA
			</h4>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					router.push(`/search/${value}`);
					setValue("");
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
					className=" bg-transparent w-full outline-none placeholder:text-text placeholder:font-body placeholder:text-md transition-all -mb-1"
					placeholder="Search for a movie..."
				/>
			</form>
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M12 18V6a6 6 0 0 1 6 6a6 6 0 0 1-6 6m8-2.69L23.31 12L20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20z"
					/>
				</svg>
			</button>
		</nav>
	);
};

export default Navbar;
