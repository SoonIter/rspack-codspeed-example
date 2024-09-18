import { defineConfig } from 'vitest/config';

// @ts-ignore
export default defineConfig(async () => {
  return {
    test: {
      name: 'bench',
      globals: true,
      environment: 'node',
      testTimeout: 60000,
      restoreMocks: true,
      exclude: ['**/node_modules/**'],
    },
    plugins: [(await import('@codspeed/vitest-plugin')).default],
  };
});
