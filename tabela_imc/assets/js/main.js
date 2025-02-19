function meuEscopo() {

    const form = document.querySelector("form")

    function calcularIMC() {

        const peso = document.getElementById("peso")
        const altura = document.getElementById("altura")
        const imc = peso.value / (altura.value*altura.value)



        





        if (imc < 18.5) {
            console.log(1)

        } else if (imc <= 24.9) {
            console.log(2)

        } else if (imc <= 29.9) {
            console.log(3)

        } else if (imc <= 34.9) {
            console.log(4)

        } else if (imc <= 39.9) {
            console.log(5)

        } else {
            console.log(6)

        }

    }

    function receberEvento(evento) {
        evento.preventDefault();
        calcularIMC();
    }



    form.addEventListener("submit", receberEvento);


}
meuEscopo()