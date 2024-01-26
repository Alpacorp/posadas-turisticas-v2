import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@public": "/public",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@containers": "/src/containers",
      "@layouts": "/src/layouts",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@data": "/src/data",
      "@context": "/src/context",
    },
  },
});
