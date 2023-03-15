import createBaralho from './baralho.js';

export default function createJogo() {
  const jogo = {};

  jogo.baralhoCompleto = createBaralho();

  jogo.baralho = jogo.baralhoCompleto;

  jogo.sortearCarta = (removerDoBaralho = true) => {
    const qtdeCartas = jogo.baralho.length;
    const indiceSorteado = Math.floor(Math.random() * qtdeCartas);

    const cartaSorteada = jogo.baralho[indiceSorteado];

    if (removerDoBaralho) {
      jogo.baralho.splice(indiceSorteado, 1);
    }

    return cartaSorteada;
  };

  jogo.podeEmpilharCarta = (
    cartaBaixo,
    cartaCima,
    corBaixoConsiderar = null
  ) => {
    corBaixoConsiderar = corBaixoConsiderar ?? cartaBaixo.cor;

    const coresSaoCompativeis = corBaixoConsiderar === cartaCima.cor;

    const simbolosNumericos = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
    ];

    const cartaBaixoEhNumerica = simbolosNumericos.includes(cartaBaixo.simbolo);

    const cartaCimaEhNumerica = simbolosNumericos.includes(cartaCima.simbolo);

    switch (cartaBaixo.simbolo) {
      case 'Bloqueio':
        switch (cartaCima.simbolo) {
          case 'Bloqueio':
            return true;
          case 'Inverter':
            return coresSaoCompativeis;
          case '+2':
            return coresSaoCompativeis;
          case 'Coringa':
            return true;
          case 'Coringa+4':
            return true;
          default: // Carta de Cima é Numérica
            return coresSaoCompativeis;
        }

      case 'Inverter':
        switch (cartaCima.simbolo) {
          case 'Bloqueio':
            return coresSaoCompativeis;
          case 'Inverter':
            return true;
          case '+2':
            return coresSaoCompativeis;
          case 'Coringa':
            return true;
          case 'Coringa+4':
            return true;
          default: // Carta de Cima é Numérica
            return coresSaoCompativeis;
        }

      case '+2':
        switch (cartaCima.simbolo) {
          case 'Bloqueio':
            return coresSaoCompativeis;
          case 'Inverter':
            return coresSaoCompativeis;
          case '+2':
            return true;
          case 'Coringa':
            return true;
          case 'Coringa+4':
            return true;
          default: // Carta de Cima é Numérica
            return coresSaoCompativeis;
        }

      case 'Coringa':
        switch (cartaCima.simbolo) {
          case 'Bloqueio':
            return coresSaoCompativeis;
          case 'Inverter':
            return coresSaoCompativeis;
          case '+2':
            return coresSaoCompativeis;
          case 'Coringa':
            return true;
          case 'Coringa+4':
            return true;
          default: // Carta de Cima é Numérica
            return coresSaoCompativeis;
        }

      case 'Coringa+4':
        switch (cartaCima.simbolo) {
          case 'Bloqueio':
            return coresSaoCompativeis;
          case 'Inverter':
            return coresSaoCompativeis;
          case '+2':
            return coresSaoCompativeis;
          case 'Coringa':
            return true;
          case 'Coringa+4':
            return true;
          default: // Carta de Cima é Numérica
            return coresSaoCompativeis;
        }

      default: // Carta de Baixo é Numérica
        switch (cartaCima.simbolo) {
          case 'Bloqueio':
            return coresSaoCompativeis;
          case 'Inverter':
            return coresSaoCompativeis;
          case '+2':
            return coresSaoCompativeis;
          case 'Coringa':
            return true;
          case 'Coringa+4':
            return true;
          default: // Carta de Cima é Numérica
            const simbolosSaoCompativeis =
              cartaBaixo.simbolo === cartaCima.simbolo;
            return simbolosSaoCompativeis || coresSaoCompativeis;
        }
    }
  };

  return jogo;
}
