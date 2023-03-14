import createBaralho from './baralho.js';

export default function createJogo() {
  const jogo = {};

  jogo.baralhoCompleto = createBaralho();

  jogo.baralho = jogo.baralhoCompleto;

  jogo.sortearCarta = (removerDoBaralho = true) => {
    const qtdeCartas = jogo.baralho.length;
    const indiceSorteado = Math.floor(Math.random() * qtdeCartas);

    const cartaSorteada = jogo.baralho[indiceSorteado];

    if(removerDoBaralho){
        jogo.baralho.splice(indiceSorteado, 1);  
    }

    return cartaSorteada;
  }

  jogo.podeEmpilharCarta = (cartaBaixo, cartaCima) => {
    const simbolosNumericos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const cartaBaixoEhNumerica = simbolosNumericos.includes(cartaBaixo.simbolo);
    const cartaCimaEhNumerica = simbolosNumericos.includes(cartaCima.simbolo);
    const ambasCartasSaoNumericas = cartaBaixoEhNumerica && cartaCimaEhNumerica;

    const simbolosSaoCompativeis = cartaBaixo.simbolo === cartaCima.simbolo;
    const coresSaoCompativeis = cartaBaixo.cor === cartaCima.cor;
    
    if(ambasCartasSaoNumericas){
        return simbolosSaoCompativeis || coresSaoCompativeis;
    }
    

    return false;
  }

  return jogo;
}
