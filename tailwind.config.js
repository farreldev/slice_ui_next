/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
				serif: ["Volkhov", "serif"],
				"open-sans": ["Open Sans", "sans-serif"],
			},
			colors: {
				"custom-yellow": "#F1A501",
				"custom-light-yellow": "#F0BB1F",
				"custom-red": "#DF6951",
				"custom-navy": "#006380",
				"custom-dark-blue": "#1E1D4C",
				"custom-orange": "#F15A2B",
				"custom-purple": "#D5AEE4",
				"custom-purple-light": "#8A79DF",
				"custom-milk": "#FFF1DA",
				"custom-body-text": "#5E6282",
				"custom-body-text-light": "#84829A",
				"custom-black": "#080809",
				"custom-blue": "#59B1E6",
			},
			container: {
				center: true,
			},
		},
	},
	plugins: [],
};
