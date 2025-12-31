import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "production" && visualizer({
      filename: "dist/bundle-analysis.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          
          // UI component libraries
          'ui-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
            '@radix-ui/react-tooltip',
          ],
          
          // Animation and motion libraries
          'animation-vendor': ['framer-motion', 'gsap'],
          
          // Chart and data visualization
          'chart-vendor': ['recharts', 'three', 'ogl', 'postprocessing'],
          
          // Form and validation libraries
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          
          // Utility libraries
          'utility-vendor': [
            'clsx',
            'tailwind-merge',
            'class-variance-authority',
            'cmdk',
            'date-fns',
            'embla-carousel-react',
            'react-resizable-panels',
            'input-otp',
            'vaul',
            'sonner',
          ],
          
          // Icons
          'icon-vendor': ['lucide-react'],
          
          // Query and state management
          'query-vendor': ['@tanstack/react-query'],
          
          // Other large dependencies
          'misc-vendor': [
            'react-day-picker',
            'react-console-emulator',
          ],
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'logo.png') {
            return 'assets/[name].[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    chunkSizeWarningLimit: 500, // Back to standard limit - optimization successful
  },
}));
