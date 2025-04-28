// variáveis importadas de outros arquivos

const computador = require("./computador"); // importa o módulo 'computador' que provavelmente contém a função gerarEscolhaAleatoria
const readline = require("readline-sync"); // importa o módulo 'readline-sync' para leitura de entrada do usuário
const resultado = require("./resultado"); // importa o módulo 'resultado' que provavelmente contém a função determinarResultado

// Função que converte o índice numérico em uma escolha de pedra, papel ou tesoura
function nomeEscolha(indice) {
  if (indice === 0) {
    return "pedra"; // retorna 'pedra' se o índice for 0
  } else if (indice === 1) {
    return "papel"; // retorna 'papel' se o índice for 1
  } else if (indice === 2) {
    return "tesoura"; // retorna 'tesoura' se o índice for 2
  } else {
    console.error("OPÇÃO INVÁLIDA!"), process.exit(0); // exibe erro e encerra o programa se o índice for inválido
  }
}

// Função que exibe o menu do jogo e realiza a jogada
function exibirMenu() {
  console.log(
    " ---------------------------------------------\n| Bem vindo ao jogo do Pedra Papel e Tesoura! |\n ---------------------------------------------"
  ); // exibe uma mensagem de boas-vindas com uma formatação especial
  console.log("O que você jogará?\n[0] Pedra\n[1] Papel\n[2] Tesoura\n"); // apresenta as opções para o usuário
  let escolhaUsuario = nomeEscolha(parseInt(readline.question("=> "))); // lê a escolha do usuário e converte para número, depois para a escolha correspondente
  let escolha_bot = nomeEscolha(computador.gerarEscolhaAleatoria()); // gera a escolha do computador usando a função importada e converte para nome
  resultado.determinarResultado(escolhaUsuario, escolha_bot); // chama a função para determinar o resultado do jogo
}

module.exports = {
  exibirMenu, // exporta a função exibirMenu para ser usada em outros arquivos
};
