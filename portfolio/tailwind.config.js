/** @type {import('tailwindcss').Config} */

// Palette tokens are defined as RGB channels in src/index.css (light + .dark),
// so opacity modifiers like `bg-accent/10` work.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                bg: token('bg'),
                surface: token('surface'),
                ink: token('ink'),
                muted: token('muted'),
                line: token('line'),
                accent: token('accent'),
                'accent-strong': token('accent-strong'),
            },
        },
    },
    plugins: [],
}
