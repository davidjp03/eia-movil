import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#66c2e0",
      },
      animation: {
        spinBlob: "spinBlob 8s linear infinite",
      },
      keyframes: {
        spinBlob: {
          "0%": { transform: "rotate(0deg) scale(2)" },
          "100%": { transform: "rotate(360deg) scale(2)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
