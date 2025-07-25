# Buscador de Endereço por CEP

Este é um script simples em Node.js que demonstra como consultar um endereço a partir de um CEP utilizando a API pública [ViaCEP](https://viacep.com.br/).

## 📜 Descrição

O objetivo deste projeto é ilustrar o uso de funcionalidades assíncronas do JavaScript, como `fetch` e `Promises`, para consumir uma API externa. O script recebe um CEP, faz uma requisição para a API do ViaCEP e exibe no console o logradouro, a cidade e o estado correspondentes.

## ✨ Como Funciona

O fluxo principal do código é:

1.  **Definição do CEP**: Uma variável armazena o CEP a ser consultado.
2.  **Requisição com `fetch`**: A função `fetch` é usada para fazer uma requisição HTTP GET para a URL da API do ViaCEP.
3.  **Processamento com Promises**:
    - O método `.then()` é utilizado para processar a resposta da requisição.
    - O primeiro `.then()` converte o corpo da resposta para o formato JSON.
    - O segundo `.then()` extrai os dados relevantes (logradouro, localidade, uf) e cria um novo objeto.
4.  **Exibição do Resultado**: O objeto final com o endereço é impresso no console.

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado (versão 18 ou superior, que inclui `fetch` nativamente).

### Passos

1.  Clone este repositório ou salve o arquivo `index.js`.

2.  Abra o terminal na pasta do projeto.

3.  Execute o script com o seguinte comando:

    ```bash
    node index.js
    ```

    Ou, se estiver usando o script `dev` do `package.json`:

    ```bash
    npm run dev
    ```

4.  O endereço correspondente ao CEP `01001000` será exibido no console:
    ```json
    { "logradouro": "Praça da Sé", "cidade": "São Paulo", "estado": "SP" }
    ```

## 💻 Código Fonte (`index.js`)

```javascript
const receivedCep = "01001000";

function buscarEnderecoPorCEP(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const address = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return {
        logradouro: data.logradouro,
        cidade: data.localidade,
        estado: data.uf,
      };
    });
  return address;
}

buscarEnderecoPorCEP(receivedCep).then((enderco) => console.log(enderco));
```
