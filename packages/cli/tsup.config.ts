import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'dist',
    cjsInterop: true,
    bundle: true,
    target: 'esnext',
    clean: true,
    minify: true,
    platform: 'node',
    external: [/node_modules/, /^node:/],
    treeshake: true,
    dts: true,
    splitting: false,
    sourcemap: true,
})
