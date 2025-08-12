const receivedCep = "01001000";

async function buscarEnderecoPorCEP(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const response = await fetch(url);
  const data = await response.json();
  return {
    logradouro: data.logradouro,
    cidade: data.localidade,
    estado: data.uf,
  };
}

buscarEnderecoPorCEP(receivedCep).then((enderco) => console.log(enderco));
