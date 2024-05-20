import * as crypto from "crypto";
import { PathLike, readFileSync } from "fs";

const sign = (
  // Signature algorithm to use (in this case, "RSA-SHA256")
  algorithm: "RSA-SHA256",
  // Path to the file to be signed
  input: PathLike,
  // Path to the file containing the private key
  privateKey: PathLike,
  // Encoding for the resulting signature (e.g., "hex", "base64")
  encoding: BufferEncoding,
  // Passphrase to decrypt the private key
  passphrase: string
) => {
  // Create a Sign object of the specified type
  const sign = crypto.createSign(algorithm);

  // Update the Sign object with the contents of the file to be signed
  sign.update(readFileSync(input));

  // Finalize the update of the Sign object
  sign.end();

  // Generate the signature using the private key and passphrase
  return sign
    .sign({
      key: readFileSync(privateKey), // Read the private key from the file
      passphrase, // Provide the passphrase
    })
    .toString(encoding); // Convert the signature to the specified encoding
};

export default sign;