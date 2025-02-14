const num = parseFloat(prompt("Digite seu numero:"))
console.log("Yes niga " + num)
let raiz, inteiro, nan, roundBaixo, roundCima, casaDecimal
let numeroTitulo = document.getElementById("numero")
const numeroRaiz = document.getElementById("raiz")
const numeroInteiro = document.getElementById("inteiro")
const numeroNaN = document.getElementById("nan")
const numeroBaixo = document.getElementById("roundBaixo")
const numeroCima = document.getElementById("roundCima")
const numeroDecimal = document.getElementById("casaDecimal")


raiz = num ** 0.5
console.log(raiz)
inteiro = Number.isInteger(num)
console.log(inteiro)
nan = Number.isNaN(num)
console.log(nan)
roundBaixo = Math.floor(num)
console.log(roundBaixo)
roundCima = Math.ceil(num)
console.log(roundCima)
casaDecimal = num.toFixed(2)
console.log(casaDecimal)

numeroTitulo.innerHTML = `<h1>O numero é ${num} </h1>`  
numeroRaiz.innerHTML = `<p> Raiz quadrada: ${raiz} </p>`
numeroInteiro.innerHTML = `<p> ${num} é inteiro: ${inteiro}</p>`
numeroNaN.innerHTML = `<p>É NaN: ${nan}</p>`
numeroBaixo.innerHTML = `<p>Arredondado para baixo: ${roundBaixo}</p>`
numeroCima.innerHTML = `<p>Arredondado para cima: ${roundCima}</p>`
casaDecimal.innerHTML = `<p>Com duas casas decimais <p id="casaDecimal"></p></p>`

