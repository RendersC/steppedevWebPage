import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"

// vite-react-ssg делает два прохода сборки: клиентский и серверный (SSR).
// В SSR-проходе react/react-dom внешние, поэтому manualChunks для них ломает сборку —
// применяем дробление чанков только к клиентскому билду.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            // Тяжёлые библиотеки — в отдельные чанки: меньше основной бандл,
            // быстрее LCP/первый рендер (фактор ранжирования Core Web Vitals).
            manualChunks: {
              react: ["react", "react-dom"],
              motion: ["motion"],
              gsap: ["gsap"],
            },
          },
        },
  },
}))
