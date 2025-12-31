import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import { componentTagger } from "TheCloudSol-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  const isStaging = mode === "staging";
  const isDevelopment = mode === "development";

  return {
    server: {
      host: "::",
      port: 8080,
    },
    
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      isProduction && VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
        manifest: {
          name: "The Cloud Sol - Professional Cloud Solutions",
          short_name: "The Cloud Sol",
          description: "Professional cloud solutions provider offering Microsoft 365, Azure, AWS, Google Workspace, and custom cloud services",
          theme_color: "#0ea5e9",
          background_color: "#0f172a",
          display: "standalone",
          orientation: "portrait",
          scope: "/",
          start_url: "/",
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
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
        strategies: 'generateSW',
        filename: 'sw.js',
      }),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      target: "es2020",
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: isDevelopment,
      minify: isProduction ? "terser" : false,
      
      // Optimize chunk splitting
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            router: ["react-router-dom"],
            ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu", "@radix-ui/react-toast"],
            utils: ["clsx", "tailwind-merge", "class-variance-authority"],
            icons: ["lucide-react"],
            forms: ["react-hook-form", "@hookform/resolvers", "zod"],
            animations: ["framer-motion", "gsap"],
          },
        },
      },

      // Asset optimization
      assetsInlineLimit: 4096,
      
      // Terser options for production
      terserOptions: isProduction ? {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"],
        },
        mangle: {
          safari10: true,
        },
      } : undefined,

      // Chunk size warning limit
      chunkSizeWarningLimit: 1000,
    },

    // Environment-specific optimizations
    define: {
      __DEV__: isDevelopment,
      __PROD__: isProduction,
      __STAGING__: isStaging,
    },

    // CSS optimization
    css: {
      devSourcemap: isDevelopment,
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`,
        },
      },
    },

    // Preview configuration for production builds
    preview: {
      port: 4173,
      host: true,
    },

    // Optimize dependencies
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-router-dom",
        "lucide-react",
        "clsx",
        "tailwind-merge",
      ],
    },
  };
});
