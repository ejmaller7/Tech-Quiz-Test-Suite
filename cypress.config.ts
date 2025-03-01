import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Update if using a different port
    supportFile: false, // Optional: No extra support file
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});