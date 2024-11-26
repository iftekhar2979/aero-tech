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
      backgroundColor:{
        nav: "#0e1082"
      },
      fontFamily: {
        // Add Times New Roman as a custom font family
        serif: ["Raleway", "Arial", "Helvetica", "sans-serif"],  // The first one is the desired font, the second is a fallback
      },
    },
  },
  plugins: [],
} satisfies Config;
