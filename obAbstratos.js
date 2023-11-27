// Definição do objeto
function FormaGeometrica(lados, base, altura) {
    // Atributos
    this.lados = lados;
    this.base = base;
    this.altura = altura;
  
    // Métodos
    this.tipo = function () {
      switch (this.lados) {
        case 3:
          return "Triângulo";
        case 4:
          return "Quadrilátero";
        default:
          return "Polígono";
      }
    };
  
    this.area = function () {
      return this.base * this.altura;
    };
  
    this.perimetro = function () {
      return this.lados * this.base;
    };
  }
  
function Funcionario(nome, cpf, salario) {
    this.nome = nome;
    this.cpf = cpf;
    this.salario = salario;
  
    this.bonificacao = function (percentual) {
      const bonificacao = 100;
      console.log(`O funcionário ${this.nome} recebeu uma bonificação.`);
      this.salario += bonificacao;
    };
  
    this.ferias = function (dias) {
      console.log(`O funcionário ${this.nome} está de férias por ${dias} dias.`);
    };
  
    this.demitir = function () {
      console.log(`O funcionário ${this.nome} foi demitido.`);
    };
  }
  
  
  