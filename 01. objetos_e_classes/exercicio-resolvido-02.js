class Carro {
    marca;
    cor;
    litrosDeCombustivelPorKmRodado;

    constructor(marca, cor, litrosDeCombustivelPorKmRodado) {
        this.marca = marca;
        this.cor = cor;
        this.litrosDeCombustivelPorKmRodado = litrosDeCombustivelPorKmRodado;
    }

    calcularValorGastoNoPercurso(qtdKm, precoCombustivel) {
        return qtdKm * this.litrosDeCombustivelPorKmRodado * precoCombustivel;
    }
}

const ybr = new Carro('yamaha', 'preta', (1 / 40));

console.log(ybr.calcularValorGastoNoPercurso(40, 4.79));