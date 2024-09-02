import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
    
      md: "768px",
      lg: "1200px",

    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #E1F1FF 0%, #FFFFFF 100%)',
        'arrow-pattern': 'url(/path/to/arrow.png)', // Path to the image
      },
      animation: {
        shimmer: 'shimmer 0.5s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    
    },
  },
  plugins: [],
};

export default config;
