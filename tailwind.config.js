/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				border: '#D3D8DC',
				primary: '#316FEA',
				darkBlack: '#060E1E',
			},
		},
	},
	plugins: [],
}
