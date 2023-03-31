/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: {
			sans: ["Red Hat Display", "sans-serif"],
		},
		extend: {
			colors: {
				blue: {
					very_pale: "hsl(225, 100%, 98%)",
					pale: "hsl(225, 100%, 94%)",
					bright: "hsl(245, 75%, 52%)",
					desaturated: "hsl(224, 23%, 55%)",
					dark_blue: "hsl(223, 47%, 23%)",
				},
			},
		},
	},
	plugins: [],
};
