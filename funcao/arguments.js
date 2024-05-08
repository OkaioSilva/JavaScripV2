/* 
    suponha a seguinte função 

    function somar(){
        let soma = ???
        return soma
    }
    console.log(somar(1,2))
    console.log(somar(1,2,3,4))
    console.log(somar(1,2,3,4,5,6,7,8,9,10))
    Como que eu poderia saber quantos parâmetros foram passados para dentro dessa função?

    É aí que o arguments entra em ação 
*/

// function declaration
function somar() {
    console.log(arguments) // array like (se comporta como array, mas não é array)
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}
console.log(somar(1, 2))
console.log(somar(1, 2, 3, 4))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// essa propriedade não existe dentro de arrow functions
// se você precisar ter acesso a esses valores, precisa obrigatoriamente trabalhar com function expression ou declaration 

// funtion expression 
const somar = function() {
    console.log(arguments) // array like (se comporta como array, mas não é array)
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}
console.log(somar(1, 2))
console.log(somar(1, 2, 3, 4))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))