function meuEscopo() {

    const form = document.querySelector("form")

    function calcularIMC() {

        const peso = document.getElementById("peso")
        const altura = document.getElementById("altura")
        const imc = peso.value / (altura.value*altura.value)
        const resultado = document.getElementById("resultado")

        console.log(imc)



        





        if (imc < 18.5) {
            console.log(1)
            resultado.innerHTML = "<p>Você esta Abaixo do Peso<\p>";

        } else if (imc <= 24.9) {
            console.log(2)
            resultado.innerHTML = "<p>Você esta com o Peso Normal<\p>";

        } else if (imc <= 29.9) {
            console.log(3)
            resultado.innerHTML = "<p>Você esta com Sobrepeso<\p>";

        } else if (imc <= 34.9) {
            console.log(4)
            resultado.innerHTML = "<p>Você esta com Obesidade Grau I<\p>";

        } else if (imc <= 39.9) {
            console.log(5)
            resultado.innerHTML = "<p>Você esta com Obesidade Grau II<\p>";

        } else {
            console.log(6)
            resultado.innerHTML = "<p>Você esta com Obesidade Grau III<\p>";

        }

    }

    function receberEvento(evento) {
        evento.preventDefault();
        calcularIMC();
    }



    form.addEventListener("submit", receberEvento);


}
meuEscopo()