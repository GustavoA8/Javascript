function meuEscopo() {
    const form = document.querySelector("form")
    const resultado = document.querySelector("#resultado")
    const pessoas = [];

    // form.onsubmit = function(evento ) {
    //     evento.preventDefault();
    //     alert(1)
    //     console.log("foi enviado")
    // }

    //função para criar a array de pessoas(objetos)
    function criarPessoas(pessoas,nome, sobrenome, peso, altura) {
        pessoas.push ( {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        })

        return pessoas;



    }

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector(".nome").value
        const sobrenome = form.querySelector(".sobrenome").value
        const peso = form.querySelector(".peso").value
        const altura = form.querySelector(".altura").value

        console.log(pessoas)

        criarPessoas(pessoas, nome, sobrenome, peso, altura);
        
        resultado.innerHTML += `<p> ${nome}, ${sobrenome}, ${peso}, ${altura} </p> \n <div id="resultado"></div>`
        
    }

    form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();