import * as dotenv from 'dotenv';
import * as D from 'io-ts/Decoder';
import { intDecoder, withDefault } from './utils/decode';
dotenv.config({ path: `${__dirname}/../.env` });

const configDecoder = D.struct({
  PORT: withDefault(5000)(intDecoder),
  HOST: withDefault('0.0.0.0')(D.string),
  DB_URL: withDefault(
    'postgresql://postgresql:postgresql@localhost:5432/postgresql?schema=public',
  )(D.string),
});

export type Config = D.TypeOf<typeof configDecoder>;

export const config = configDecoder.decode(process.env);
