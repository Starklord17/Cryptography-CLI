import * as crypto from "crypto";
import { PathLike, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

// Function to generate an RSA or RSA-PSS key pair
const keygen = (
  // Type of key to generate ("rsa" or "rsa-pss")
  type: "rsa" | "rsa-pss",
  // Encryption size for the private key (128, 192, or 256 bits)
  size: 128 | 192 | 256,
  // Passphrase to protect the private key
  passphrase: string,
  // Output format of the keys ("pem" or "der")
  format: "pem" | "der",
  // Modulus length for the key (2048, 3072, or 4096 bits)
  modulusLength: 2048 | 3072 | 4096
) => {
  // Define key generation options based on the type
  switch (type) {
    case "rsa": {
      // Options for RSA keys
      const options: crypto.RSAKeyPairOptions<
        crypto.KeyFormat,
        crypto.KeyFormat
      > = {
        modulusLength, // Modulus length
        publicKeyEncoding: {
          type: "spki", // Standard format for public key
          format, // Output format
        },
        privateKeyEncoding: {
          type: "pkcs8", // Standard format for private key
          format, // Output format
          cipher: `aes-${size}-cbc`, // Encryption algorithm for the private key
          passphrase, // Passphrase
        },
      };
      return crypto.generateKeyPairSync("rsa", options); // Generate the key pair
    }
    case "rsa-pss": {
      // Options for RSA-PSS keys (similar to RSA but with PSS signature)
      const options: crypto.RSAPSSKeyPairOptions<
        crypto.KeyFormat,
        crypto.KeyFormat
      > = {
        modulusLength, // Modulus length
        publicKeyEncoding: {
          type: "spki", // Standard format for public key
          format, // Output format
        },
        privateKeyEncoding: {
          type: "pkcs8", // Standard format for private key
          format, // Output format
          cipher: `aes-${size}-cbc`, // Encryption algorithm for the private key
          passphrase, // Passphrase
        },
      };
      return crypto.generateKeyPairSync("rsa-pss", options); // Generate the key pair
    }
  }
};

// Function to create a key pair and save it to files
const keypair = (
  type: "rsa" | "rsa-pss",
  size: 128 | 192 | 256,
  passphrase: string,
  outDir: string,
  outFormat: "pem" | "der",
  modulusLength: 2048 | 3072 | 4096
) => {
  // Generate the key pair using the keygen function
  const { publicKey, privateKey } = keygen(
    type,
    size,
    passphrase,
    outFormat,
    modulusLength
  );

  // Create the output directory if it doesn't exist
  mkdirSync(outDir, { recursive: true });

  // Save the public key to a file
  writeFileSync(join(outDir, `public.${outFormat}`), publicKey.toString());

  // Save the private key to a file (encrypted with the passphrase)
  writeFileSync(join(outDir, `private.${outFormat}`), privateKey.toString());
};

export default keypair;