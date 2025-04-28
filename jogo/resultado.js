function determinarResultado(user_input, bot_input) { 
    // Exibe as escolhas do usuário e do computador em letras maiúsculas
    console.log(
      "Voce escolheu:", // Mensagem de exibição
      user_input.toUpperCase(), // Converte a escolha do usuário para maiúsculas
      "e o computador escolheu: ", // Mensagem de exibição
      bot_input.toUpperCase() // Converte a escolha do bot para maiúsculas
    );
  
    // Verifica se o usuário escolheu "pedra"
    if (user_input === "pedra") {
      if (bot_input === "pedra") {
        console.log("Empate!"); // Ambos escolheram pedra
      } else if (bot_input === "papel") {
        console.log("O computador venceu!"); // Papel cobre pedra
      }
      if (bot_input === "tesoura") {
        console.log("Você venceu!"); // Pedra quebra tesoura
      }
    }
    // Verifica se o usuário escolheu "papel"
    else if (user_input === "papel") {
      if (bot_input === "pedra") {
        console.log("Você venceu!"); // Papel cobre pedra
      } else if (bot_input === "papel") {
        console.log("Empate!"); // Ambos escolheram papel
      }
      if (bot_input === "tesoura") {
        console.log("O computador venceu!"); // Tesoura corta papel
      }
    }
    // Verifica se o usuário escolheu "tesoura"
    else if (user_input === "tesoura") {
      if (bot_input === "pedra") {
        console.log("O computador venceu!"); // Pedra quebra tesoura
      } else if (bot_input === "papel") {
        console.log("Você venceu!"); // Tesoura corta papel
      }
      if (bot_input === "tesoura") {
        console.log("Empate!"); // Ambos escolheram tesoura
      }
    }
  }
  
  // Exporta a função para uso em outros arquivos
  module.exports = {
    determinarResultado,
  };