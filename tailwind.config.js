module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./notes/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	plugins: [require('tailwindcss-safe-area')],
}
