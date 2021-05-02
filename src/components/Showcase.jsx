import React from 'react';
import { Link } from 'react-router-dom';

const Showcase = () => {
	return (
		<section className="showcase">
			<div className="overlay flex flex-col items-center justify-center text-white px-5">
				<h1 className="text-5xl font-bold text-right mb-10 lg:text-center lg:text-7xl lg:px-56 lg:pb-5">
					Ambition is<span className="text-green-500"> enthusiasm </span> <br /> with a purpose.
				</h1>

				<div className="ml-auto lg:ml-0">
					<Link
						to="/hire"
						className="mr-5 bg-green-500 p-3 px-7 rounded-full font-semibold transition-all hover:bg-green-800"
					>
						Get Started
					</Link>
					<Link
						to="/projects"
						className="lg:mr-5 bg-white text-green-500 p-3 px-7 rounded-full font-semibold transition-all hover:bg-green-800 hover:text-white"
					>
						Projects
					</Link>
					<div className="lg:pt-12 lg:ml-20 ">
						<a
							href="https://github.com/DIdaniel"
							target="_blank"
							rel="noreferrer"
							className="mr-5 bg-yellow-300 p-2 px-4 rounded-full font-semibold transition-all text-4xl hover:bg-yellow-600"
						>
							<i class="fab fa-github-square" />
						</a>
						<a
							href="https://velog.io/@faunus"
							target="_blank"
							rel="noreferrer"
							className="mr-5 bg-yellow-300 p-2 px-4 rounded-full font-semibold transition-all text-4xl hover:bg-yellow-600"
						>
							<i class="fab fa-blogger" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Showcase;
