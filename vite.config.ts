import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  const sourcemap = env.DEBUG_PRODUCTION === "true" ? true : false;

  // Setting Ref: https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html
  // Sketch icon: https://sketch.io/sketchpad/
  // ICON Generator: https://tools.crawlink.com/tools/pwa-icon-generator/
  // Favicon Generator: https://realfavicongenerator.net/
  const pwaOptions: Partial<VitePWAOptions> = {
    registerType: "autoUpdate",
    includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
    manifest: {
      name: "NUMEMO",
      short_name: "NUMEMO",
      description: "Numemo calculates and takes notes for you.",
      theme_color: "#ffffff",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      sourcemap,
    },
  };

  return {
    plugins: [react(), tsconfigPaths(), VitePWA(pwaOptions)],
    build: { sourcemap },
  };
});
