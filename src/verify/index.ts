import * as crypto from "crypto";
import { PathLike, readFileSync } from "fs";

const verify = (
  // Signature algorithm used for verification (same as in signing)
  algorithm: "RSA-SHA256",
  // Path to the file to be verified
  input: PathLike,
  // Path to the file containing the public key
  publicKey: PathLike,
  // Signature to verify (encoded in hexadecimal)
  signature: string,
  // Encoding of the signature (e.g., "hex", "base64")
  signatureEncoding: crypto.BinaryToTextEncoding
) => {
  // Create a Verify object of the specified type
  const verify = crypto.createVerify(algorithm);

  // Update the Verify object with the contents of the file to be verified
  verify.update(readFileSync(input));

  // Finalize the update of the Verify object
  verify.end();

  // Verify the signature using the public key, signature, and its encoding
  return verify.verify(readFileSync(publicKey), signature, signatureEncoding);
};

export default verify;