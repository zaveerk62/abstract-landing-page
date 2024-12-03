import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
    extend: {
      colors: {
        red: "hsl(12, 88%, 59%)",
        blue: "hsl(228, 39%, 23%)",
        grayBlue: "hsl(227, 12%, 61%)",
        darkBlue: "hsl(233, 12%, 13%)",
        paleRed: "hsl(13, 100%, 96%)",
        lightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
}; 

export default config;