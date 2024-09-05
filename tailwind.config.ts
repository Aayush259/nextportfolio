import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /animate-txt-slide-\d+/,
    },
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: '1',
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        'txt-slide': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '10%': { opacity: '1', transform: 'translateY(0)' },
          '20%': { opacity: '1', transform: 'translateY(0)' },
          '30%': { opacity: '0', transform: 'translateY(-28px)' },
          '100%': { opacity: '0', transform: 'translateY(-28px)' },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        'txt-slide-1': 'txt-slide 10s ease-in-out 0s infinite',
        'txt-slide-2': 'txt-slide 10s ease-in-out 2s infinite',
        'txt-slide-3': 'txt-slide 10s ease-in-out 4s infinite',
        'txt-slide-4': 'txt-slide 10s ease-in-out 6s infinite',
        'txt-slide-5': 'txt-slide 10s ease-in-out 8s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
