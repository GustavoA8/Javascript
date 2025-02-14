function meuEscopo (){
    const form = document.querySelector("form")
    const resultado = document.querySelector("#resultado")
    const pessoas = [];
    let contador = 0;

    // form.onsubmit = function(evento ) {
    //     evento.preventDefault();
    //     alert(1)
    //     console.log("foi enviado")
    // }
    function criarPessoas(nome, sobrenome, peso, altura){
        pessoas[contador]= {
            nome,
            sobrenome,
            peso,
            altura
        }
        contador++;
       

    }

    function recebeEventoForm (evento){
         evento.preventDefault();

         const nome = form.querySelector(".nome").value
         const sobrenome = form.querySelector(".sobrenome").value
         const peso = form.querySelector(".peso").value
         const altura = form.querySelector(".altura").value

         console.log(nome, sobrenome, peso ,altura)

         criarPessoas(nome, sobrenome, peso, altura);
         resultado.innerHTML. = `<p> ${nome}, ${sobrenome}, ${peso}, ${altura} </p> \n <div id="resultado"></div>`
    }

    form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();