import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4f3',
          100: '#fce8e6',
          200: '#fad5d1',
          300: '#f6b4ad',
          400: '#f08679',
          500: '#e5624f',
          600: '#d14532',
          700: '#af3526',
          800: '#912f23',
          900: '#782c23',
        },
      },
    },
  },
  plugins: [],
};
export default config;
