let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    livros = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}

const arrayLike = {
    length: 2,
    0: 2,
    1: 9,
    2: 4,
    3: 99, // ignored by reduce() since length is 3
  };
  console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));
  // 9