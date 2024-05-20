import * as crypto from "crypto";

const diffieHellman = (
  // Defines the encoding to use to convert binary data to text
  encoding: crypto.BinaryToTextEncoding, 
  // Parameters to initialize Diffie-Hellman from known values
  from?: {
    prime: string;
    primeEncoding: crypto.BinaryToTextEncoding;
    generator: string;
    generatorEncoding: crypto.BinaryToTextEncoding;
    publicKey: string;
    publicKeyEncoding: crypto.BinaryToTextEncoding;
    privateKey: string;
    privateKeyEncoding: crypto.BinaryToTextEncoding;
  }
) => {
  // If no parameters are provided, start the Diffie-Hellman exchange
  if (!from) {
    // Create a new Diffie-Hellman group with 128-bit security
    const dh = crypto.createDiffieHellmanGroup("modp14");
    // Generate the public and private keys
    const publicKey = dh.generateKeys();

    // Return the parameters necessary to share with the other party:
    return {
      prime: dh.getPrime().toString(encoding), // Prime number in string format
      generator: dh.getGenerator().toString(encoding), // Generator in string format
      publicKey: publicKey.toString(encoding), // Public key in string format
      privateKey: dh.getPrivateKey().toString(encoding), // Private key DO NOT SHARE!
    };
  } else {
    // If the parameters are provided, continue the exchange
    const dh = crypto.createDiffieHellman(
      from.prime,
      from.primeEncoding,
      from.generator,
      from.generatorEncoding
    );

    // Set the received private and public keys
    dh.setPrivateKey(from.privateKey, from.privateKeyEncoding);
    dh.setPublicKey(from.publicKey, from.publicKeyEncoding);

    // Calculate the shared secret key
    const secret = dh.computeSecret(from.publicKey, from.publicKeyEncoding);

    // Return the parameters, including the secret key:
    return {
      prime: dh.getPrime().toString(encoding),
      generator: dh.getGenerator().toString(encoding),
      publicKey: dh.getPublicKey().toString(encoding),
      privateKey: dh.getPrivateKey().toString(encoding), // Private key DO NOT SHARE!
      secret: secret.toString(encoding), // Shared secret key
    };
  }
};

export default diffieHellman;