const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    //metodo
    fala () {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome,
//         idade
//     };
// }

// const pessoa1 = criaPessoa('Luiz', 'Silva', 25)
// const pessoa2 = criaPessoa('Maria', 'Santos', 32)
// const pessoa3 = criaPessoa('Lucas', 'Matos', 34)
// const pessoa4 = criaPessoa('Robson', 'Oliveira', 39)
// const pessoa5 = criaPessoa('Marcos', 'Silveira', 35)

// console.log(pessoa1);

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// }

// const pessoa2 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// }

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
