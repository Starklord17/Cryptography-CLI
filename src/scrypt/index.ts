import * as crypto from "crypto";

/**
 * The function `scrypt` in TypeScript uses the `crypto.scryptSync` method to hash a password with a
 * salt and return it as a string in the specified encoding.
 * @param {string} password - The `password` parameter is a string that represents the password that
 * will be used for the scrypt hashing algorithm.
 * @param {string} salt - A salt is a random value that is used as an additional input to a one-way
 * function that hashes data. It is typically used in cryptography to protect passwords and other
 * sensitive information from being easily cracked by attackers.
 * @param {number} size - The `size` parameter in the `scrypt` function represents the length of the
 * derived key in bytes. It determines the strength of the key derivation function and the length of
 * the output key.
 * @param {BufferEncoding} encoding - The `encoding` parameter in the `scrypt` function specifies the
 * encoding of the output buffer. It is used to determine how the output of the scrypt hashing function
 * should be represented as a string. Common values for encoding include 'hex', 'base64', 'utf8',
 * 'ascii',
 * @returns The `scrypt` function is returning the result of running the `crypto.scryptSync` function
 * with the provided `password`, `salt`, and `size` parameters, and then converting the result to a
 * string using the specified `encoding`.
 */
const scrypt = (
  password: string,
  salt: string,
  size: number,
  encoding: BufferEncoding
) => {
  return crypto.scryptSync(password, salt, size).toString(encoding);
};

export default scrypt;
