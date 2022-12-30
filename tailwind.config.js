/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}'],
    theme: {},
    plugins: [require('@tailwindcss/typography')],
};
