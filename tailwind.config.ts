import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#0F0F0F",
        accent: "#E98C1D",
        "nav-bg": "#1E1E1E",
      },
      screens: {
        offer: "620px",
        mobilehover: { raw: "(hover:hover)" },
      },
    },
    screens: {
      xs: "420px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
export default config;
