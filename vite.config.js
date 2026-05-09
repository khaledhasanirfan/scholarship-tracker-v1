import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/scholarship-tracker-v1/",
  plugins: [react()],
});
