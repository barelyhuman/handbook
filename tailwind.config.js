/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./content/**/*.{html,njk,md}"],
	plugins: [require("tailwindcss-safe-area")],
};
