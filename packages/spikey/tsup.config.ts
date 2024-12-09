import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts', 'src/config.ts'],
    minify: true,
    outDir: 'dist',
    bundle: true,
    format: ['esm'],
    dts: true,
    sourcemap: true,
    clean: true,
})
