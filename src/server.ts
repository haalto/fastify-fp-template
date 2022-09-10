import { app } from './app';
import { config } from './config';
import { pipe } from 'fp-ts/lib/function';

const { port, host } = config;

(async () =>
  pipe(app({ logger: true }), server =>
    server.listen({ port, host }, err => {
      if (err) {
        server.log.error(err);
        process.exit(1);
      }
    }),
  ))();
