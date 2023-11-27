// Definição do objeto
class FormaGeometrica {
    constructor(lados, base, altura) {
      // Atributos
      this.lados = lados;
      this.base = base;
      this.altura = altura;
    }
  
    // Métodos
    tipo() {
      switch (this.lados) {
        case 3:
          return "Triângulo";
        case 4:
          return "Quadrilátero";
        default:
          return "Polígono";
      }
    }
  
    area() {
      return this.base * this.altura;
    }
  
    perimetro() {
      return this.lados * this.base;
    }
  }
  
  class Funcionario {
    constructor(nome, cpf, salario) {
      this.nome = nome;
      this.cpf = cpf;
      this.salario = salario;
    }
  
    bonificacao(percentual) {
      const bonificacao = 100;
      console.log(`O funcionário ${this.nome} recebeu uma bonificação.`);
      this.salario += bonificacao;
    }
  
    ferias(dias) {
      console.log(`O funcionário ${this.nome} está de férias por ${dias} dias.`);
    }
  
    demitir() {
      console.log(`O funcionário ${this.nome} foi demitido.`);
    }
  }
  
  
  
  