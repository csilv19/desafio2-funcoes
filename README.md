# script.js

# Análise do Código JavaScript

## Descrição
Este código JavaScript calcula o saldo de vitórias e derrotas de um herói em um jogo e determina seu nível de ranqueamento com base nesse saldo.

## Função `saldoRanqueada`
A função `saldoRanqueada` aceita dois parâmetros (`numVitorias` e `numDerrotas`) e calcula a diferença entre eles, representando o saldo de vitórias.

javascript
function saldoRanqueada(numVitorias, numDerrotas) {
    let resultadoSaldoT = numVitorias - numDerrotas;
    return resultadoSaldoT;
}

## Uso da Função
O código chama a função saldoRanqueada com valores específicos (90 vitórias e 33 derrotas) e armazena o resultado em resultadoSaldo.

let resultadoSaldo = saldoRanqueada(90, 33);
Determinação do Nível de Ranqueamento
Com base no saldo calculado, o código determina o nível de ranqueamento (nivelRank) utilizando faixas predefinidas.

if (nivelRank <= 10) {
    nivelRank = "Ferro";
} else if (nivelRank <= 20) {
    nivelRank = "Bronze";
} else if (nivelRank <= 50) {
    nivelRank = "Prata";
} else if (nivelRank <= 80) {
    nivelRank = "Ouro";
} else if (nivelRank <= 90) {
    nivelRank = "Diamante";
} else if (nivelRank <= 100) {
    nivelRank = "Lendário";
} else {
    nivelRank = "Imortal";
}

## Exibição do Resultado

Por fim, o código imprime no console uma mensagem que inclui o saldo de vitórias e o nível de ranqueamento.

console.log(`O Herói tem um saldo de ${resultadoSaldo} vitórias e está no nível de ${nivelRank}`);

Este `README.md` fornece uma visão geral do código e seu propósito.
