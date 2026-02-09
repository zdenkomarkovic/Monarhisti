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
        royal: {
          blue: '#002366',
          gold: '#D4AF37',
        },
        serbian: {
          red: '#C6363C',
          blue: '#0C4076',
          white: '#FFFFFF',
        },
      },
      animation: {
        'wave': 'wave 3.5s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotateY(0deg) translateX(0)' },
          '25%': { transform: 'rotateY(5deg) translateX(2px)' },
          '75%': { transform: 'rotateY(-5deg) translateX(-2px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
