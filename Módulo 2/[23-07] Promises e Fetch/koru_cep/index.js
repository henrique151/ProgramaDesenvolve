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
