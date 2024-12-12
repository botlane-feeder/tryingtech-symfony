import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // Specify the development server port
    port: 80,
  },
  // Base name of your app
  base: "/", // Replace this with the subdirectory path if needed
});