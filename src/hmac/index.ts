import * as crypto from "crypto";
import { PathLike, readFileSync } from "fs";

/**
 * The function `hmac` generates a Hash-based Message Authentication Code (HMAC) using the specified
 * algorithm, key, encoding, and input data.
 * @param {string} algorithm - The `algorithm` parameter is a string that specifies the hashing
 * algorithm to be used in the HMAC (Hash-based Message Authentication Code) calculation. Common
 * examples include 'sha256', 'sha512', 'md5', etc.
 * @param {string} key - The `key` parameter in the `hmac` function is a string that represents the
 * secret key used in the HMAC (Hash-based Message Authentication Code) algorithm for generating a
 * cryptographic hash.
 * @param encoding - The `encoding` parameter in the `hmac` function specifies the encoding of the
 * output digest. It is of type `crypto.BinaryToTextEncoding` which can be one of the following values:
 * @param {PathLike} input - The `input` parameter in the `hmac` function is expected to be a
 * `PathLike` type, which typically represents a file path or a file descriptor. It is used as the
 * input data for generating the HMAC (Hash-based Message Authentication Code) using the specified
 * algorithm and key.
 * @returns The `hmac` function is returning the result of creating a HMAC (Hash-based Message
 * Authentication Code) using the specified algorithm, key, encoding, and input data. The function
 * reads the input file synchronously using `readFileSync`, creates the HMAC using `crypto.createHmac`,
 * updates it with the input data, and then returns the digest of the HMAC in the specified encoding.
 */
const hmac = (
  algorithm: string,
  key: string,
  encoding: crypto.BinaryToTextEncoding,
  input: PathLike
) => {
  return crypto
    .createHmac(algorithm, Buffer.from(key))
    .update(readFileSync(input))
    .digest(encoding);
};

export default hmac;
