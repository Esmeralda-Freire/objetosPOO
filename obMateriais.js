// Definição do objeto
class Celular {
  constructor(marca, modelo) {
    // Atributos
    this.marca = marca;
    this.modelo = modelo;
    this.ligado = false;
  }

  // Métodos
  ligar() {
    if (!this.ligado) {
      this.ligado = true;
      console.log(`O celular foi ligado.`);
    } else {
      console.log(`O celular já está ligado.`);
    }
  }

  chamar(numero) {
    if (this.ligado) {
      console.log(`Chamando o número ${numero} no celular.`);
    } else {
      console.log(`O celular está desligado. Ligue antes de chamar.`);
    }
  }

  desligar() {
    if (this.ligado) {
      this.ligado = false;
      console.log(`O celular foi desligado.`);
    } else {
      console.log(`O celular já está desligado.`);
    }
  }
}

class Casaco {
  constructor(tamanho, cor) {
    this.tamanho = tamanho;
    this.cor = cor;
    this.vestido = false;
  }

  vestir() {
    if (!this.vestido) {
      this.vestido = true;
      console.log(`Você vestiu o casaco.`);
    } else {
      console.log(`Você já está vestindo o casaco.`);
    }
  }

  fechar() {
    if (this.vestido) {
      console.log(`Você fechou o casaco.`);
    } else {
      console.log(`Você precisa vestir o casaco antes de fechar.`);
    }
  }

  tirar() {
    if (this.vestido) {
      this.vestido = false;
      console.log(`Você tirou o casaco.`);
    } else {
      console.log(`Você não está vestindo o casaco.`);
    }
  }
}
