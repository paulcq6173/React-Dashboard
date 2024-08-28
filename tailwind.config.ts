import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './dist/index.html'],
  theme: {
    fontFamily: {
      content: ['"Noto Sans", sans-serif'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
