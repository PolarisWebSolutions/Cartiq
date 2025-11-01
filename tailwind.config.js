/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.mdx"],
  theme: {
    extend: {
      colors: {
        primary: "#00C4B3",
        accent: "#A174FF",
        background: "#121417",
        surface: "#1C1F24",
        surfaceLight: "#F6F8FA",
        textPrimary: "#FFFFFF",
        textSecondary: "#A6ACB1",
        success: "#B7F05A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        container: "1140px",
      },
      borderRadius: {
        xl: "28px",
        lg: "18px",
        md: "12px",
      },
      boxShadow: {
        glow: "0 30px 60px rgba(0, 7, 14, 0.55)",
        depth: "0 18px 35px rgba(0, 8, 20, 0.35)",
        soft: "0 12px 25px rgba(0, 0, 0, 0.2)",
      },
      letterSpacing: {
        wide: "0.28em",
        wider: "0.22em",
      },
    },
  },
  plugins: [],
};
