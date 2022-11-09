const entradas = [5, 50, 10, 98, 23, 1050, 230, 48, 10, 2530];
let indiceGets = 0;

function gets() {
    const valor = entradas[indiceGets];
    indiceGets++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };