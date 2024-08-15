import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animations/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f1f1f1",
      },
    },
    fontFamily: {
      "Poppins": ["Poppins", "sans-serif"],
      "BananasFont": ["BananasFont", "sans-serif"],
      "PlayfairDisplay": ["PlayfairDisplay", "sans-serif"],
      "IBMPlex": ["IBMPlex", "sans-serif"],
    },
    screens: {
      xm: { max: "400px" },
      sm: { min: "401px", max: "768px" },
      md: { min: "769px", max: "1024px" },
      // td: { min: "1025px", max: "1199px" },
      // lg: { min: "1321px", max: "1490px" },
      lg: { min: "1025px", max: "1490px" },
      // mdl: { min: "1000px", max: "1100px" },
      // tds: { min: "1200px", max: "1365px" },
      // lgd: { min: "1366px", max: "1599px" },
      xl: { min: "1491px" },
    }
  },
  plugins: [],
};
export default config;
