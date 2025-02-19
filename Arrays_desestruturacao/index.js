// const numeros = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(numeros[1][0])

const numeros = [ 1000, 2000, 3000, 4000, 5000, 6000, 7000];

const [a, b, , c, ...resto] = numeros
console.log(a, b, c)
console.log(resto)

