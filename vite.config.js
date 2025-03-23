import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from "path"

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'public/locales') + '/[!.]*',
          dest: 'public/locales'
        }
      ]
    })
  ]
});
