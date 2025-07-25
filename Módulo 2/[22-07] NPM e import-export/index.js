import CryptoJS from "crypto-js";

const message = "Essa é a minha mensagem secreta!";
const secretKey = "123456";

// console.log({message, secretKey});

const cipherText = CryptoJS.AES.encrypt(message, secretKey).toString();

console.log("Criptografado:", cipherText);

const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);

console.log("Descriptografada:", decryptedMessage);
