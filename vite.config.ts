import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  resolve: { alias: { "@": "/src" } },
  plugins: [
    tanstackStart({
      spa: { enabled: false },
      router: { generatedRouteTree: "route-tree.gen.ts" },
    }),
    viteReact(),
    tailwindcss(),
  ],
})
