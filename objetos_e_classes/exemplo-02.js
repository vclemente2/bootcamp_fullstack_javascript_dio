/*
Incluindo o conceito de construtor dentro de uma classe
*/

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    } // com o construtor podemos criar parâmetros para facilitar e otimizar a declaração de uma ocorrência da Classe

    descreverPessoa() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vinicius = new Pessoa('vinicius', 30); // utilizando os parâmetros definidos no constructor para instanciar uma ocorrencia de Pessoa.
console.log(vinicius);
