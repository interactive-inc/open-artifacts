import { resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tanstackStart({
      tsr: { generatedRouteTree: "src/route-tree.gen.ts" },
      spa: { enabled: false },
      target: "cloudflare-module",
    }),
    tailwindcss(),
  ],
  resolve: { alias: { "@": resolve(__dirname, "./src") } },
})
