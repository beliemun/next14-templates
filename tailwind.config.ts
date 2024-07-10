import type { Config } from "tailwindcss";
import { teal } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": teal[50],
          "100": teal[100],
          "200": teal[200],
          "300": teal[300],
          "400": teal[400],
          "500": teal[500],
          "600": teal[600],
          "700": teal[700],
          "800": teal[800],
          "900": teal[900],
          "950": teal[950],
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
