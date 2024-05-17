// Criar duas funções: sum() e avarege()
// sum() = retornar a soma dos argumentos 
// avarege() =  média dos argumentos (soma/length)
// - As funções podem receber 1 ou + parâmetros
// - Use e abuse das facilidades do ES6



function sum() {
    // tenho que receber os argumentos = argments
    // posso usar o Array.from, ou '...' spread

    const numbers = Array.from(arguments)
    return numbers.reduce(function (sum, atual) {
        return sum + atual
        // sum = número anterior
        // atual = número atual
    }, 0 /* começar com zero*/)
}

function avarege() {
    return sum(...arguments) / arguments.length

    // sum(...arguments) = os argumentos separados por vírgulas
}


let soma = sum(1, 2, 5, 8)
console.log(soma) // 16

let media = avarege(1, 2, 5, 8)
console.log(media) // 4


// com o spread:

/* 
    function sum(){
        const numbers = [...arguments]
        return numbers.reduce(function(sum, atual){
            return sum + atual
        }, 0)

    }

    function avarege(){
        return sum(...arguments) / arguments.length
    }

    let soma = sum(1,2,5,8)
console.log(soma) // 16

let media = avarege(1,2,5,8)
console.log(media) // 4

*/