import * as crypto from "crypto";
import { PathLike, readFileSync } from "fs";

/**
 * The function `hash` takes an algorithm, encoding, and input path, reads the file at the input path,
 * creates a hash using the specified algorithm, and returns the hash in the specified encoding.
 * @param {string} algorithm - The `algorithm` parameter is a string that specifies the hashing
 * algorithm to be used, such as 'sha256', 'md5', etc.
 * @param encoding - The `encoding` parameter specifies the encoding of the output hash. It can be one
 * of the following values from the `crypto` module in Node.js:
 * @param {PathLike} input - The `input` parameter in the `hash` function is expected to be a
 * `PathLike` type, which typically represents a file path or a file descriptor.
 * @returns The `hash` function is returning the result of hashing the contents of the file specified
 * by the `input` parameter using the specified `algorithm` and encoding the result in the specified
 * `encoding`.
 */
const hash = (
  algorithm: string,
  encoding: crypto.BinaryToTextEncoding,
  input: PathLike
) => {
  return crypto
    .createHash(algorithm)
    .update(readFileSync(input))
    .digest(encoding);
};

export default hash;
