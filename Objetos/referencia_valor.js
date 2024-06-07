// Dados primitivos são armazenados por valor
// mas tudo que não é dado primitivo, como por exemplo, objeto, array, função é amazenado por referência
// array no js é um tipo de objeto também

let x = 10
function mudaX(x) {
    x++
    console.log("X interno", x)
    // 11
}
mudaX(x)
// O que acontece? Acontece que quando eu passei essa variável para dentro dessa função
//Não passei a variável em si, mas sim o valor dela, ou seja
// é como se eu fizesse isso
// mudaX(10)
// Isso significa que a minha variável X continua intacta

console.log("X externo", x)
// 10

// A história muda se eu fizer assim

let y = [10]

function mudaY(y) {
    y.push(11)
    console.log("Y interno", y)
    // 11
}
mudaY(y)

console.log("Y externo", y)

// Aqui, o Y interno e o externo vão ter o número 10 e o 11 [10, 11]
// Ou seja, quando eu passei o y no 'mudaY(y)', eu passei uma referência da minha array "let y = [10]"
// o y do 'mudaY(y)' é o mesmo do let
// então quando dei um push no y interno, eu alterei a array original e adicionei o número 11 lá 

// {} === {} 
// vai retornar falso porque são dois objetos diferentes com referências na memória diferentes
