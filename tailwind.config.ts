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
        primary: "#0597f2",
        secondary: "#f2a705",
        accent: "#f2a705",
        neutral: "#fff",
      },
      textColor: {
        primary: "#0597f2",
        secondary: "#f2a705",
        accent: "#f2a705",
        neutral: "#fff",
      },
      borderColor: {
        primary: "#0597f2",
        secondary: "#f2a705",
        accent: "#f2a705",
        neutral: "#fff",
      },
    },
  },
  plugins: [],
} satisfies Config;
