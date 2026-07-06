import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#05060A",
        white: "#F7F7F5",
        electric: "#0326FC",
        graphite: "#111318",
        "soft-blue": "#E8EBFF",
      },
      fontFamily: {
        clash: ["'Clash Display'", "sans-serif"],
        general: ["'General Sans'", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(5,6,10,0.04), 0 1px 2px rgba(5,6,10,0.06)',
        'card-hover': '0 4px 12px rgba(5,6,10,0.08), 0 2px 4px rgba(5,6,10,0.04)',
      },
    },
  },
  plugins: [],
};
export default config;
