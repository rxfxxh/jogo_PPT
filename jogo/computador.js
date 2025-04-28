function gerarEscolhaAleatoria() {
    //cria função para gerar uma escolha para o BOT
    return Math.floor(Math.random() * 3);
  }
  
  module.exports = { //exporta o módulo para outros arquivos 
    gerarEscolhaAleatoria,
  };
  