function calcularMediaAluno(listaNotas) {

    let somaNotas = 0;
    for (let i = 0; i < listaNotas.length; i++) {
        somaNotas += listaNotas[i];
    }

    const media = somaNotas / listaNotas.length
    return media;
}

(function main() {
    const notas = [];

    notas.push(5);
    notas.push(7);
    notas.push(3);
    notas.push(8);
    notas.push(4);
    notas.push(10);

    console.log(calcularMediaAluno(notas));

})()