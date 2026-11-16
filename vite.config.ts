import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('/react/') ||
              id.includes('/react-dom/') ||
              id.includes('/react-router') ||
              id.includes('/scheduler/')
            ) {
              return 'vendor-react';
            }
            if (
              id.includes('/@tanstack/') ||
              id.includes('/zustand/') ||
              id.includes('/axios/')
            ) {
              return 'vendor-state';
            }
            if (id.includes('/lucide-react/')) {
              return 'vendor-icons';
            }
            if (
              id.includes('/recharts/') ||
              id.includes('/d3-') ||
              id.includes('/victory-vendor/') ||
              id.includes('/internmap/') ||
              id.includes('/robust-predicates/') ||
              id.includes('/delaunator/')
            ) {
              return 'vendor-charts';
            }
            if (
              id.includes('/@ant-design/cssinjs') ||
              id.includes('/@ant-design/colors') ||
              id.includes('/@ant-design/fast-color') ||
              id.includes('/@ant-design/icons') ||
              id.includes('/antd/es/theme') ||
              id.includes('/antd/es/config-provider') ||
              id.includes('/antd/es/locale') ||
              id.includes('/antd/es/style')
            ) {
              return 'vendor-antd-core';
            }
          }
        },
      },
    },
  },
})

