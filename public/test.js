    window.crypto.subtle.generateKey(
      {
        name: "ECDH",
        namedCurve: "P-384"
      },
      false,
      ["deriveKey"]
    ).then(data=>{
        console.log(data)
    })



// /*
// Derive an AES key, given:
// - our ECDH private key
// - their ECDH public key
// */
// function deriveSecretKey(privateKey, publicKey) {
//     return window.crypto.subtle.deriveKey(
//       {
//         name: "ECDH",
//         public: publicKey
//       },
//       privateKey,
//       {
//         name: "AES-GCM",
//         length: 256
//       },
//       false,
//       ["encrypt", "decrypt"]
//     );
//   }
  
//   async function agreeSharedSecretKey() {
//     // Generate 2 ECDH key pairs: one for Alice and one for Bob
//     // In more normal usage, they would generate their key pairs
//     // separately and exchange public keys securely
//     let alicesKeyPair = await window.crypto.subtle.generateKey(
//       {
//         name: "ECDH",
//         namedCurve: "P-384"
//       },
//       false,
//       ["deriveKey"]
//     );
  
//     let bobsKeyPair = await window.crypto.subtle.generateKey(
//       {
//         name: "ECDH",
//         namedCurve: "P-384"
//       },
//       false,
//       ["deriveKey"]
//     );
  
//     // Alice then generates a secret key using her private key and Bob's public key.
//     let alicesSecretKey = await deriveSecretKey(alicesKeyPair.privateKey, bobsKeyPair.publicKey);
  
//     // Bob generates the same secret key using his private key and Alice's public key.
//     let bobsSecretKey = await deriveSecretKey(bobsKeyPair.privateKey, alicesKeyPair.publicKey);
  
//     // Alice can then use her copy of the secret key to encrypt a message to Bob.
//     let encryptButton = document.querySelector(".ecdh .encrypt-button");
//     encryptButton.addEventListener("click", () => {
//       encrypt(alicesSecretKey);
//     });
  
//     // Bob can use his copy to decrypt the message.
//     let decryptButton = document.querySelector(".ecdh .decrypt-button");
//     decryptButton.addEventListener("click", () => {
//       decrypt(bobsSecretKey);
//     });
//   }