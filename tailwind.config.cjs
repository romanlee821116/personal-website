/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			'primary-green': '#5C7261',
			black: '#000',
			gray: '#555',
		},
		extend: {
			width: {
				'10%': '10%',
				'60%': '60%',
				'80%': '80%',
				'90%': '90%',
			},
			maxWidth: {
				'1/2': '50%',
				'40%': '40%',
			},
		},
	},
	plugins: [],
}
