/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			titleGreen: '#5C7261',
			black: '#000',
			gray: '#555',
		},
		extend: {},
	},
	plugins: [],
}
