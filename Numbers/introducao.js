// Principais métodos e propriedades 
//  MAX_VALUE, MIN_VALUE
// toFixed(), toPrecision(), toExponential(),
// toString(), toLocaleString(), valueOf()
// 

let numero = 1234567.890


// toFixed() - diz respeito ao número de casas decimais que quero num determinado núemro

console.log(numero.toFixed(2)) //1234567.89
console.log(typeof numero.toFixed(2)) // retorna string

// toPrecision() - É, basicamente, o número de digitos que eu quero no número

console.log(numero.toPrecision(7)) //1234568 ( arredondou o 7.8 para 8)
console.log(typeof numero.toPrecision(7)) // retorna string

//toExponential() - transforma um número em notação científica 

numero = 12.34567

console.log(numero.toExponential()) //1.234567e+1
console.log(numero.toExponential(4)) //1.2346e+1


// toString() - quando se trata de números, podemos transformar número para hexadecimal ou para binário

numero = 15
// console.log(numero.toString())
// console.log(typeof numero.toString())

// O que podemos fazer quando estiver usando esse método em objetos do tipo números ou em literais de número, que é o caso  
// o método recebe um parametro e esse parametro diz respeito  base do número que quero representar
// ou seja, posso representar esse número de forma binária ou hexadecimal

// decimal: 0 até 9
// binário: (2 digitos -- 0 ou 1)   0-0, 1-1, 2-10, 3- 11
console.log(0 .toString(2))
console.log(1 .toString(2))
console.log(2 .toString(2))
console.log(3 .toString(2))
console.log(4 .toString(2))

// hexadecimal: (16 digitos) de 0 até 15, mas não posso representar os numeros 11,12,13,14 e 15
// como representar esse numeros então ? respresento com letras
// 10 - a, 11 - b, 12 - c, 13 - d, 14 - e, 15 - f

console.log(10 .toString(16))
console.log(11 .toString(16))
console.log(12 .toString(16))
console.log(13 .toString(16))

// toLocaleString()

numero = 123456.789

console.log(numero.toLocaleString())
console.log(numero.toLocaleString("pt-BR",{style: "currency", currency: "BRL"}))
console.log(numero.toLocaleString("en-US",{style: "currency", currency: "USD"}))



