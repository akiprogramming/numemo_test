import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// Setting Ref: https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html
// Sketch icon: https://sketch.io/sketchpad/
// ICON Generator: https://tools.crawlink.com/tools/pwa-icon-generator/
// Favicon Generator: https://realfavicongenerator.net/
const pwaOptions: Partial<VitePWAOptions> = {
  registerType: "prompt",

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
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), VitePWA(pwaOptions)],
  // plugins: [
  //   VitePWA({
  //     registerType: "autoUpdate",
  //     devOptions: {
  //       enabled: true,
  //     },
  //     manifest: {
  //       theme_color: "#f5820b",
  //       background_color: "#f6bc35",
  //       display: "browser",
  //       scope: "/",
  //       start_url: "/",
  //       name: "NUMEMO",
  //       short_name: "NUMEMO",
  //       description: "NUMEMO - NUMBER MEMO",
  //       icons: [
  //         {
  //           src: "/icon-192x192.png",
  //           sizes: "192x192",
  //           type: "image/png",
  //         },
  //         {
  //           src: "/icon-256x256.png",
  //           sizes: "256x256",
  //           type: "image/png",
  //         },
  //         {
  //           src: "/icon-384x384.png",
  //           sizes: "384x384",
  //           type: "image/png",
  //         },
  //         {
  //           src: "/icon-512x512.png",
  //           sizes: "512x512",
  //           type: "image/png",
  //           purpose: "any maskable",
  //         },
  //       ],
  //     },
  //   }),
  // ],
});
