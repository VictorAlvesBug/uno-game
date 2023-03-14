export default function createJogador (){
    const jogador = {};

    jogador.cartas = [];

    jogador.receberCarta = (carta) => {
        jogador.cartas.push(carta);
    };

    return jogador;
}