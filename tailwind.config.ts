import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./docs/**/*.md", "./templates/**/*.md"],
  theme: {
    extend: {},
  },
};

export default config;
