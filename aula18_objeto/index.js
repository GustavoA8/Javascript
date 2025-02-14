

const pessoa1 ={
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`)
    },
    incrementaIdade(){
        this.idade++;
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()








// function criaPessoa (nome, sobrenome, idade){
//     return{nome, sobrenome, idade}
// }
// const pessoa1 = criaPessoa("Luiz", "Otavio", 25)
// const pessoa2 = criaPessoa("Lucas", "Gabriel", 15)
// const pessoa3 = criaPessoa("Gustavo", "Araujo", 19)
// const pessoa4 = criaPessoa("Guiherme", "Rosati", 18)

// console.log(pessoa3.idade)


// const pessoa1 = {
//     nome: "Luiz",
//     sobrenome: "Miranda",
//     idade: 25
// }

// console.log(pessoa1.nome)
// console.log(pessoa1.sobrenome)
// console.log(pessoa1.idade)