let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Minas Gerais', 'Pará', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];

function listaEstado() {
  const lista = document.getElementById('select-estado');

  for (let i = 0; i < estados.length; i += 1) {
    const opcao = document.createElement( 'option' );
    opcao.value = estados[i];
    opcao.innerText = estados[i];
    lista.appendChild(opcao);
  }
}
listaEstado();

function dataInicio() {
  //Falta fazer
}
dataInicio();