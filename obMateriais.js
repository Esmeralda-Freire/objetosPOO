// Definição do objeto

function Celular(marca, modelo) {
    // Atributos
    this.marca = marca;
    this.modelo = modelo;
    this.ligado = false;

// Métodos
this.ligar = function () {
    if (!this.ligado) {
      this.ligado = true;
      console.log(`O celular foi ligado.`);
    } else {
      console.log(`O celular já está ligado.`);
    }
  };

this.chamar = function (numero) {
    if (this.ligado) {
      console.log(`Chamando o número ${numero} no celular.`);
    }
  };

this.desligar = function () {
    if (this.ligado) {
      this.ligado = false;
      console.log(`O celular foi desligado.`);
    } else {
      console.log(`O celular já está desligado.`);
    }
  };
}


function Casaco(tamanho, cor) {
    this.tamanho = tamanho;
    this.cor = cor;
    this.vestido = false;
  
    
    this.vestir = function () {
      if (!this.vestido) {
        this.vestido = true;
        console.log(`Você vestiu o casaco.`);
      } else {
        console.log(`Você já está vestindo o casaco.`);
      }
    };
  
    this.fechar = function () {
      if (this.vestido) {
        console.log(`Você fechou o casaco.`);
      } else {
        console.log(`Você precisa vestir o casaco antes de fechar.`);
      }
    };
  
    this.tirar = function () {
      if (this.vestido) {
        this.vestido = false;
        console.log(`Você tirou o casaco.`);
      } else {
        console.log(`Você não está vestindo o casaco.`);
      }
    };
  }
  
  
