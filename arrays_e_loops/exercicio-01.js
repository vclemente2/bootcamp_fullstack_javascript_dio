// 1) Crie um programa que dado um número, imprima sua tabuada

function calcularTabuada(numero) {
    let tabuada = [];
    for (let i = 0; i <= 10; i++) {
        tabuada[i] = `${numero} x ${i} = ${numero * i}`
    }
    return tabuada;
}

(function main() {
    const resultado = calcularTabuada(5).join("\n");
    console.log(resultado);
})()