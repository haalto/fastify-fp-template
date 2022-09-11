import { app } from './app';
import { Config, config } from './config';
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/Either';

const start = async (config: Config) =>
  pipe(await app({ logger: true }), server =>
    server.listen({ host: config.HOST, port: config.PORT }, err => {
      if (err) {
        server.log.error(err);
        process.exit(1);
      }
      server.log.info(config);
    }),
  );

E.fold(error => error, start)(config);
