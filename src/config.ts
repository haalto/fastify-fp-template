import * as dotenv from 'dotenv';
import * as D from 'io-ts/Decoder';
import { intDecoder, withDefault } from './utils/decode';
dotenv.config({ path: `${__dirname}/../.env` });

const configDecoder = D.struct({
  PORT: withDefault(5000)(intDecoder),
  HOST: withDefault('localhost')(D.string),
  DB_HOST: withDefault('postgres')(D.string),
  DB_PASSWORD: withDefault('postgres')(D.string),
  DB_USER: withDefault('postgres')(D.string),
  DB_NAME: withDefault('postgres')(D.string),
});

export type Config = D.TypeOf<typeof configDecoder>;

export const config = configDecoder.decode(process.env);
