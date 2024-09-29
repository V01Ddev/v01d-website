import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

async function mdx() {
    return await import('@mdx-js/rollup')
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdx()],
})
