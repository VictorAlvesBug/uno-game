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

const listaJogadores = [];

for(let indiceJogador = 0; indiceJogador < qtdeJogadores; indiceJogador++){
  const jogador = createJogador();
  
  for(let indiceCarta = 0; indiceCarta < qtdeCartasPorJogador; indiceCarta++){
    jogador.receberCarta(jogo.sortearCarta());
  }

  listaJogadores.push(jogador);
}

const cartaMesa = jogo.sortearCarta();

console.log('Carta da Mesa:');
console.log(cartaMesa);

listaJogadores.forEach((jogador, indice) => {
  console.log(`Cartas do Jogador ${indice + 1} compatíveis:`);
  jogador.cartas.filter(carta => jogo.podeEmpilharCarta(cartaMesa, carta)).forEach((carta) => {
    console.log(carta);
  });
});