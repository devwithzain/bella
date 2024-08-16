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
      md: { min: "769px", max: "1023px" },
      lg: { min: "1031px", max: "1490px" },
      xl: { min: "1491px" },

      mht: { min: "1024px", max: "1030px" },
      lht: { min: "1280px", max: "1285px" },
      xlht: { min: "1366px", max: "1370px" },
      sdht: { min: "1440px", max: "1445px" },
      slr: { min: "1366px", max: "1370px" },
      mdd: { min: "1660px", max: "1670px" },
    }
  },
  plugins: [],
};
export default config;
