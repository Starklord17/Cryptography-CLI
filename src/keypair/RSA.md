# RSA (Rivest–Shamir–Adleman) 

Es un algoritmo de criptografía asimétrica ampliamente utilizado para el cifrado y la firma digital. Se basa en la dificultad de factorizar números enteros grandes.

**Firma digital con RSA:**

La firma digital permite garantizar la autenticidad e integridad de un mensaje o documento. En el caso de RSA, el proceso funciona de la siguiente manera:

**Generación de claves:**
- Se generan un par de claves, una clave privada d y una clave pública e. La clave privada se mantiene en secreto, mientras que la clave pública se distribuye.

**Creación del hash:**
- Se calcula un hash criptográfico del mensaje que se desea firmar. El hash es un resumen digital del mensaje que permite verificar su integridad.

**Firma:**
- El hash se cifra con la clave privada d para generar la firma digital.

**Verificación:**
- El receptor del mensaje utiliza la clave pública e para descifrar la firma digital.
- Si el valor descifrado coincide con el hash calculado del mensaje original, se verifica la autenticidad e integridad del mensaje.

## Command

`yarn run cli keypair -p password --type rsa`

`yarn run cli sign -i yarn.lock --priv ./.secrets/private.pem -p password`

1fb6b9f0485a408d04ae380403abd373fd0fe53118483f47a832e5b154b490bd3b77f4b4820251539dc00434bc2c36dec09822fb98a60fa6d10d2a81c63462b11454dc98f0c53fe8a8a6916e9a06a691d37eca7d21419c2682e42499f99e296db45649c9a2ff3ca54a25775775cda0316c4be47daf535d1898589d0eb29f8f214fe424c3582bf4aa3352ad9a20fcf3265d04dc524abeb4838d5a296806bd900a50cae17013b63a78f95436af4c0b861c38d76ae58fc86465ac8454c3e3b549d0874a9fbddb53c61f9573512f603e95b301b6698344d979616c1c598cca4069b9a9b0b0c08dc168ac8daf01c8e723ca5d6c5f977ab2c290fabf8ad782506a3241

`yarn run cli verify -i yarn.lock --pub ./.secrets/public.pem -s 1fb6b9f0485a408d04ae380403abd373fd0fe53118483f47a832e5b154b490bd3b77f4b4820251539dc00434bc2c36dec09822fb98a60fa6d10d2a81c63462b11454dc98f0c53fe8a8a6916e9a06a691d37eca7d21419c2682e42499f99e296db45649c9a2ff3ca54a25775775cda0316c4be47daf535d1898589d0eb29f8f214fe424c3582bf4aa3352ad9a20fcf3265d04dc524abeb4838d5a296806bd900a50cae17013b63a78f95436af4c0b861c38d76ae58fc86465ac8454c3e3b549d0874a9fbddb53c61f9573512f603e95b301b6698344d979616c1c598cca4069b9a9b0b0c08dc168ac8daf01c8e723ca5d6c5f977ab2c290fabf8ad782506a3241`