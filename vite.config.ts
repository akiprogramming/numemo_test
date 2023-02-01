import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: "prompt",
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
