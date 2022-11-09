const { gets, print } = require('./funcoes-auxiliares');

function indicarMaiorNumero(listaNumeros) {
    let maiorNumero = listaNumeros[0];
    for (let i = 0; i < listaNumeros.length; i++) {
        let numeroAtual = listaNumeros[i];
        if (numeroAtual > maiorNumero) {
            maiorNumero = numeroAtual;
        }
    }
    return maiorNumero;
}

function entrada() {
    const entrada = [];
    let i = null;
    while (i !== undefined) {
        i = gets();
        entrada.push(i);
    }
    entrada.pop()
    return (entrada);
}

(function main() {
    print(indicarMaiorNumero(entrada()));
})()