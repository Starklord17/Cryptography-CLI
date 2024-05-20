# Cryptography CLI

A command-line interface (CLI) tool for various cryptographic operations, including random number generation, encryption, decryption, hashing, HMAC, Diffie-Hellman key exchange, key pair generation, signing, and verification.

## Features

* **PRNG:** Generate random numbers (bytes, integers, UUIDs)
* **Cipher:** Encrypt files using a password and salt
* **Decipher:** Decrypt files encrypted with this tool
* **Scrypt:** Derive keys from passwords using scrypt
* **Hash:** Hash files with various algorithms (SHA256, etc.)
* **HMAC:** Generate HMACs for files with different algorithms
* **Diffie-Hellman:** Calculate keys for secure key exchange
* **Keypair:** Generate RSA or RSA-PSS key pairs
* **Sign:** Sign files using RSA algorithms
* **Verify:** Verify signatures for files

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Starklord17/Cryptography-CLI.git
   ```

2. **Install Dependencies:**
   ```bash
   cd cryptography-cli
   yarn install  
   ```

3. **(Optional) Build:** 
   If you have made changes to the source code, you can build the project:
   ```bash
   yarn build
   ```

## Usage

Run the CLI using `yarn cli` followed by the desired command and its options:

```bash
yarn cli <command> [options]
```

**Available Commands:**

* `prng`
* `cipher`
* `decipher`
* `scrypt`
* `hash`
* `hmac`
* `diffie-hellman` (alias: `dh`)
* `keypair`
* `sign`
* `verify`

Run `yarn cli <command> --help` to see specific options for each command. 

Example: `yarn cli cipher --help`

## Examples

### **PRNG:**
```bash
yarn cli prng --type bytes --size 32 --encoding hex
```

Example:
```bash
yarn run cli prng -- --type int --min 0 --max 10
```

Example:
```bash
yarn cli prng --type bytes --size 16 --encoding hex
```

Example:
```bash
yarn cli prng --type uuid
```


### **Cipher:**
```bash
yarn cli cipher --password mysecret --salt somesalt --input myfile.txt --output encrypted.bin
```
(or the simplified form with aliases)
```bash
yarn cli cipher -p mysecret --salt somesalt -i myfile.txt -o encrypted.bin
```
Example:
```bash
yarn run cli cipher -p password --salt 123 -i yarn.lock -o yarn.lock.enc
```

### **Decipher**
Example:
```bash
yarn run cli decipher -i yarn.lock.enc -o yarn.lock.dec --salt 123 -p password
```

### **Hash:**
```bash
yarn cli hash --algorithm sha512 --input myfile.txt --encoding hex
```

### **Diffie-Hellman (Key Generation):**
```bash
yarn cli diffie-hellman --encoding hex
```

### **Diffie-Hellman (Secret Calculation):**
```bash
yarn cli diffie-hellman --publicKey <hex encoded public key> --publicKeyEncoding hex --privateKey <hex encoded private key> --privateKeyEncoding hex --prime <hex encoded prime> --primeEncoding hex --generator <hex encoded generator> --generatorEncoding hex 
```

### **Keypair:**
```bash
yarn cli keypair --type rsa --size 256 --passphrase mypass --outDir keys
```

### **Sign:**
```bash
yarn cli sign --algorithm RSA-SHA256 --input myfile.txt --privateKey private.pem --encoding hex --passphrase mypass
```

### **Verify:**
```bash
yarn cli verify --algorithm RSA-SHA256 --input myfile.txt --publicKey public.pem --signature <signature> --signatureEncoding hex
```


**Important Notes:**

* When specifying file paths for `input`, `output`, `privateKey`, and `publicKey`, use either absolute paths or relative paths from the current working directory.
* Ensure the correct encoding is used for inputs and outputs (e.g., `hex` for hexadecimal representation).
* Handle sensitive data like passwords and private keys with care.
