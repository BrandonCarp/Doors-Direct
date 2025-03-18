import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "375px",
        ss: "575px",
        sm: "680px",
        md: "860px",
        lg: "1200px",
        lgsm: "1300px",
        lgmd: "1400px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
} satisfies Config;
