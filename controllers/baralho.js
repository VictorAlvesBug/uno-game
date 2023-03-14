export default function createBaralho() {
  const baralho = [];

  const cores = ['Vermelho', 'Amarelo', 'Verde', 'Azul'];

  cores.forEach((cor) => {
    // Adiciona cartas com número zero, apenas uma de cada cor
    baralho.push({
      cor: cor,
      simbolo: '0',
    });

    // Adiciona cartas com números de 1 a 9, bloqueio, inverter e +2, duas de cada cor
    const listaCartasDuplicadas = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'Bloqueio',
      'Inverter',
      '+2',
    ];

    listaCartasDuplicadas.forEach((simbolo) => {
      Array(2)
        .fill()
        .forEach((_) => {
          baralho.push({
            cor: cor,
            simbolo: simbolo,
          });
        });
    });
  });

  // Adiciona cartas coringas e coringas +4
  Array(4)
    .fill()
    .forEach((_) => {
      baralho.push({
        cor: null,
        simbolo: 'Coringa',
      });

      baralho.push({
        cor: null,
        simbolo: 'Coringa+4',
      });
    });

  return baralho;
}
