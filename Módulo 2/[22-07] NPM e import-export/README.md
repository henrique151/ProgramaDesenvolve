# Exemplo de Criptografia com CryptoJS

Este projeto é um exemplo simples de como usar a biblioteca `crypto-js` para criptografar e descriptografar uma mensagem usando o algoritmo AES (Advanced Encryption Standard).

## Pré-requisitos

Para executar este projeto, você precisará ter o Node.js instalado em sua máquina.

## Instalação

1.  Clone o repositório ou simplesmente baixe o arquivo `index.js`.
2.  Navegue até o diretório do projeto pelo terminal.
3.  Instale a dependência `crypto-js` executando o seguinte comando:

```bash
npm install crypto-js
```

## Uso

Para executar o script e ver a criptografia e descriptografia em ação, execute o seguinte comando no seu terminal:

```bash
node index.js
```

## O Código (`index.js`)

```javascript
import CryptoJS from "crypto-js";

const message = "Essa é a minha mensagem secreta!";
const secretKey = "123456";

const cipherText = CryptoJS.AES.encrypt(message, secretKey).toString();

console.log("Criptografado:", cipherText);

const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);

console.log("Descriptografada:", decryptedMessage);
```

### Explicação

-   **`import CryptoJS from "crypto-js";`**: Importa a biblioteca `crypto-js` para o projeto.
-   **`const message = ...`**: Define a mensagem de texto que será criptografada.
-   **`const secretKey = ...`**: Define a chave secreta. Esta chave é essencial tanto para a criptografia quanto para a descriptografia. **Atenção:** Em aplicações reais, use chaves mais fortes e seguras, e gerencie-as de forma adequada, sem deixá-las expostas no código.
-   **`CryptoJS.AES.encrypt(...)`**: Esta função criptografa a `message` usando a `secretKey` com o algoritmo AES. O método `.toString()` converte o objeto cifrado resultante em uma string (por padrão, no formato Base64), que pode ser facilmente armazenada ou transmitida.
-   **`CryptoJS.AES.decrypt(...)`**: Esta função pega o texto cifrado (`cipherText`) e a mesma `secretKey` para reverter o processo de criptografia.
-   **`bytes.toString(CryptoJS.enc.Utf8)`**: O resultado da descriptografia é um objeto `WordArray`. Este comando converte esse objeto de volta para uma string legível no formato UTF-8.

## Saída Esperada

Ao executar o script, você verá uma saída semelhante a esta no console:

```
Criptografado: U2FsdGVkX19/1Z... (a string será diferente a cada execução)
Descriptografada: Essa é a minha mensagem secreta!
```

