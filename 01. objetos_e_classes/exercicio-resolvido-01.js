class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        const date = new Date;
        this.anoDeNascimento = date.getFullYear() - idade;
    }

    descreverPessoa() {
        console.log(`Me chamo ${this.nome} e tenho ${this.idade} anos`);
    }
}

function compararPessoas(pessoa01, pessoa02) {
    if (pessoa01.idade > pessoa02.idade) {
        return `${pessoa01.nome} é mais velho[a] do que ${pessoa02.nome}`;
    } else if (pessoa01.idade < pessoa02.idade) {
        return `${pessoa02.nome} é mais velho[a] do que ${pessoa01.nome}`;
    } else {
        return `${pessoa01.nome} e ${pessoa02.nome} possuem a mesma idade.`
    }
}

const gabi = new Pessoa('gabriela', 30);
const vinicius = new Pessoa('vinicius', 30);

console.log(compararPessoas(vinicius, gabi));