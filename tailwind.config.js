/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
				serif: ["Volkhov", "serif"],
			},
			colors: {
				"custom-yellow": "#F1A501",
				"custom-light-yellow": "#F0BB1F",
				"custom-red": "#DF6951",
				"custom-navy": "#006380",
				"custom-orange": "#F15A2B",
				"custom-purple": "#D5AEE4",
				"custom-milk": "#FFF1DA",
			},
			container: {
				center: true,
			},
		},
	},
	plugins: [],
};
