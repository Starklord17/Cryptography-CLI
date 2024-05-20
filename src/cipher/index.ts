import * as crypto from "crypto";
import { PathLike, createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";

// Function to encrypt a file using the AES-CBC algorithm
const cipher = (
  password: string, // Password for the encryption key
  salt: string, // String to strengthen the key (salt)
  size: 128 | 192 | 256, // Key size in bits (128, 192, or 256)
  input: PathLike, // Path to the input file
  output: PathLike // Path to the output file
) => {
  // Create an AES-CBC cipher
  const cipher = crypto.createCipheriv(
    `aes-${size}-cbc`, // AES algorithm in CBC mode
    crypto.scryptSync(password, salt, size / 8), // Key derived from password and salt
    new Uint8Array(16) // Initialization Vector (IV) of 16 bytes
  );

  // Encrypt the input file and write the result to the output file
  pipeline(
    // Create a read stream from the input file
    createReadStream(input),
    // Pipe the data through the cipher for encryption
    cipher,
    // Create a write stream to the output file
    createWriteStream(output),
    // Handle potential errors
    (err) => {
      if (err) throw err;
    }
  );
};

export default cipher;
