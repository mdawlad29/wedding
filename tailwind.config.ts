import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FF7F00",
        secondary: "#f2a705",
        accent: "#000",
        neutral: "#fff",
      },
      textColor: {
        primary: "#FF7F00",
        secondary: "#f2a705",
        accent: "#000",
        neutral: "#fff",
      },
      borderColor: {
        primary: "#FF7F00",
        secondary: "#f2a705",
        accent: "#000",
        neutral: "#fff",
      },
    },
  },
  plugins: [],
} satisfies Config;
