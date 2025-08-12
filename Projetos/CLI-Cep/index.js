import fetch from "node-fetch";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validarCep(cep) {
  return /^[0-9]{8}$/.test(cep);
}

rl.question("Digite um CEP (apenas números): ", async (cep) => {
  if (!validarCep(cep)) {
    console.log("CEP inválido! Digite 8 números.");
    rl.close();
    return;
  }
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      console.log("CEP não encontrado!");
    } else {
      console.log(
        `\n Endereço: 
        - Rua: ${data.logradouro} 
        - Bairro: ${data.bairro} 
        - Cidade: ${data.localidade} 
        - Estado: ${data.uf}`
      );
    }
  } catch (error) {
    console.log("Erro ao buscar o CEP.");
  }
  rl.close();
});
