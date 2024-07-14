/// <reference types="vitest" />

import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import * as VitestConfig from 'vitest/config';

export default VitestConfig.defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./app/tests/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    exclude: ['node_modules'],
    setupFiles: ['./app/tests/setup.ts'],
  },
  plugins: [react(), tsconfigPaths()],
});
