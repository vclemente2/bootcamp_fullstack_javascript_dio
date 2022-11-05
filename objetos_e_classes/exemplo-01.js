/*
Uma classe é um modelo, ou seja, possui a estrutura base de um objeto
para que posteriormente possa ser instanciado
vários outros objetos utilizando a classe como base;
*/

//Sintaxe de Classe:
class Pessoa {
    nome;
    idade;
    descreverPessoa() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vinicius = new Pessoa; // vinicius é uma instância da classe Pessoa (uma ocorrência)
console.log(vinicius); // nesse momento as propriedades de vinicius estão "undefined", pois ainda não foram atribuídos valores

vinicius.nome = 'vinicius';
vinicius.idade = 30;
console.log(vinicius); // nesse momento já temos os valores das propriedades nome e idade que foram atribuidos nas linhas acima
vinicius.descreverPessoa() // uma classe pode possuir métodos (funções), que podem ser executadas em qualquer momento. Essa linha de código exemplifica a execução de um método.

const gabi = new Pessoa; // incluindo uma nova ocorrência para Pessoa.
gabi.nome = 'gabi';
gabi.idade = 27;
console.log(gabi);
