import * as D from 'io-ts/Decoder';
import { pipe } from 'fp-ts/function';

export const intFromStringDecoder: D.Decoder<string, number> = {
  decode: s =>
    pipe(Number.parseInt(s, 10), n =>
      Number.isNaN(n) ? D.failure(n, 'Not a number') : D.success(n),
    ),
};

export const intDecoder = D.compose(intFromStringDecoder)(D.string);

export const withDefault: <A>(
  defaultValue: A,
) => (decoder: D.Decoder<unknown, A>) => D.Decoder<unknown, A> =
  defaultValue => decoder => ({
    decode: v =>
      v === undefined ? D.success(defaultValue) : decoder.decode(v),
  });
