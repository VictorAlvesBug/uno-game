import createJogo from './controllers/jogo.js';
import createJogador from './controllers/jogador.js';

/*const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
console.log(ctx)

ctx.drawLine(100, 200, 3000, 4000, {color: '#ed145b'});
*/

const jogo = createJogo();

const qtdeJogadores = 2;
const qtdeCartasPorJogador = 7;

const listaJogadores = Array(qtdeJogadores).fill(createJogador());

Array(qtdeCartasPorJogador)
  .fill()
  .forEach((_) => {
    listaJogadores.forEach((jogador) => {
      jogador.receberCarta(jogo.sortearCarta());
    });
  });

listaJogadores.forEach((jogador) => {
  console.log(jogador.cartas.length);
});

const cartaMesa = jogo.sortearCarta();

console.log('Carta da Mesa:');
console.log(cartaMesa);

listaJogadores.forEach((jogador, indice) => {
  console.log(`Cartas do Jogador ${indice + 1}:`);
  jogador.cartas.forEach((carta) => {
    console.log(carta);
  });
});
