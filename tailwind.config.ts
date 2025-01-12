import type { Config } from 'tailwindcss';
import colors, { red } from 'tailwindcss/colors';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			red: red,
			gray: colors.stone,
		},
		fontFamily: {
			'serif': ['Libre Baskerville', 'serif'],
		}
	},

	plugins: []
} satisfies Config;
