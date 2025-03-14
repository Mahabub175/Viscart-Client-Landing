/** @type {import('tailwindcss').Config} */
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
        primary: "#5d04b2",
        primaryLight: "#E0F2FE",
        primaryDark: "#0C4A6E",
      },
      screens: {
        sm: "580px",
        md: "600px",
        lg: "980px",
        xl: "1280px",
        xxl: "1600px",
      },
    },
  },
  plugins: [],
};
