class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / this.altura ** 2;
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc < 25) {
            return 'Peso normal';
        } else if (imc < 30) {
            return 'acima do peso';
        } else if (imc < 40) {
            return 'obeso';
        } else {
            return 'obesidade grave';
        }
    }

}

const vinicius = new Pessoa('vinicius', 87, 1.84);
console.log(vinicius.calcularImc());
console.log(vinicius.classificarImc());

const jose = new Pessoa('José', 150, 1.75);
console.log(jose.calcularImc());
console.log(jose.classificarImc());