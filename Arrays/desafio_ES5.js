function sum(){
    const numbers = []
    
    /* const numbers = []
    for( let i=0; i < arguments.length; i++){
        numbers.push(arguments[i])
    }
    console.log(numbers) */

    // Outra forma é utilizar o método forEach()
    // só que 'arguments', não possui o método forEach() por padrão
    // preciso pegar 'emprestado' a função forEach() lá do construtor Array e passar pelo arguments

    // assim:

    // Array.prototype
    // Prototype é um lugar onde fica todas as funções, digamos assim, compartilhadas entre todos os objetos.

    Array.prototype.forEach.call(arguments, function(argument){
        numbers.push(argument)
    })

    return numbers.reduce(function(sum, atual){
        return sum + atual
    }, 0)
}

function avarege(){
    const soma = sum.apply(null, arguments)
    return soma / arguments.length
}


let soma = sum(1,5,8)
console.log(soma)
let media = avarege(1,5,8)
console.log(media)