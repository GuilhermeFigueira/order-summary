function App() {
	return (
		<div className="flex flex-col bg-blue-pale h-screen w-screen items-center justify-center [background-size:contain] [background:url(/pattern-background-desktop.svg),#e1e9ff] [background-repeat:no-repeat,no-repeat;]">
			<main className="flex flex-col mx-auto rounded-2xl bg-white items-center max-w-md ">
				<header className="w-full">
					<img
						src="/illustration-hero.svg"
						alt="A cartoon girl with headphones connected to a smartphone dancing."
						className="rounded-t-2xl w-full h-full"
					/>
				</header>
				<article className="flex flex-col items-center p-8 gap-6">
					<div className="text-center gap-4 flex flex-col">
						<h1 className="text-2xl text-blue-dark_blue font-black">
							Order Summary
						</h1>
						<p className="text-blue-desaturated text-center font-medium leading-7 md:">
							You can now listen to millions of songs, audiobooks,
							and podcasts on any device anywhere you like!
						</p>
					</div>
					<div className="flex flex-row bg-blue-very_pale p-4 items-center rounded-xl w-full justify-between">
						<div className="flex flex-row gap-6">
							<img src="/icon-music.svg" alt="" />
							<div>
								<h2 className="text-blue-dark_blue font-black">
									Annual Plan
								</h2>
								<span className="text-blue-desaturated font-bold">
									$59.99/year
								</span>
							</div>
						</div>
						<h3 className="text-blue-bright underline cursor-pointer font-bold hover:text-blue-bright/60 hover:no-underline">
							Change
						</h3>
					</div>
					<footer className="w-full flex flex-col gap-4">
						<button className="bg-blue-bright text-white p-4 rounded-xl shadow-lg font-black shadow-blue-bright/30 hover:bg-blue-bright/60 transition-all duration-300">
							Proceed to Payment
						</button>
						<button className="text-blue-desaturated font-black hover:text-blue-dark_blue transition-all duration-300">
							Cancel Order
						</button>
					</footer>
				</article>
			</main>
			<div className="text-center pt-4 justify-self-end">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href="https://github.com/guilhermefigueira"
					target="_blank"
					className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-sky-700 font-bold hover:text-lg hover:tracking-widest transition-all "
				>
					Guilherme Figueira
				</a>
				.
			</div>
		</div>
	);
}

export default App;
