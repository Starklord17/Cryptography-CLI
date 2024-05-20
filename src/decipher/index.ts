import * as crypto from "crypto";
import { PathLike, createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";

// Function to decrypt a file using the AES-CBC algorithm
const decipher = (
  password: string, // Password used for decryption
  salt: string, // String to strengthen the key (salt)
  size: 128 | 192 | 256, // Key size in bits (128, 192, or 256)
  input: PathLike, // Path to the input file
  output: PathLike // Path to the output file
) => {
  // Create the AES-CBC decipher with the derived key and a random initialization vector
  const decipher = crypto.createDecipheriv(
    `aes-${size}-cbc`, // Mode of operation (AES-CBC) and key size
    crypto.scryptSync(password, salt, size / 8), // Derive key from password and salt
    new Uint8Array(16) // Random initialization vector 
  );

  // Set up a pipeline to decrypt the input file and write it to the output file
  pipeline(
    createReadStream(input), // Read the encrypted file
    decipher, // Decrypt the content using AES-CBC
    createWriteStream(output), // Write the decrypted content
    // Handle potential errors
    (err) => {
      if (err) throw err;
    }
  );
};

export default decipher;
