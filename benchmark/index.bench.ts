import { rspack } from '@rspack/core';

import { bench, describe } from 'vitest';

import config from '../rspack.config';

describe('rspack', () => {
  bench(
    'run rspack build',
    async () => {
      const compiler = rspack(config);
      return new Promise(resolve =>
        compiler.run(error => {
          console.error(error);
          resolve();
        }),
      );
    },
    { time: 10 },
  );
});
