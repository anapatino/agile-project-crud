/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        principal: "#F4F6FA",
        primary: "#005FE3",
        "gray-icon": "#9FA4AE",
        "gray-text": "#6F7882",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        mb: "500px",
        sm: "640px",
        md: "768px",
        lg1: "1040px",
        lg: "1090px",
        xl: "1280px",
        "2xl": "1490px",
        "3xl": "1700px",
        "4xl": "2100px",
        "h-sm": { raw: "(max-height: 700px)" },
        "max-mb": { max: "500px" },
      },
    },
  },
  plugins: [],
};
