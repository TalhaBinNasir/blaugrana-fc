import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "barca-bg-1": "url('/barca-bg-2.jpeg')",
        "barca-bg-2": "url('/barca-bg.webp')",
        "barca-bg-3": "url('/barca-bg-3.png')",
      },
      colors: {
        "barca-red": "#A50044",
        "barca-yellow": "#EDBB00",
        "barca-blue": "#004D98",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
