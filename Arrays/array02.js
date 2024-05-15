let arr = [4, 5, 10, 20, 35, 4, 5]


// indexOf() e lastIndexOf() = vão retornar o valor de indice de um elemento encontrado

// indexOf() = o primeiro indice que encontrar
console.log(arr.indexOf(5))
// indice 1

// lastIndexOf() = o último indice encontrado
console.log(arr.lastIndexOf(5))
//  indice 6

// quando não encontrar algo, o retorno será = -1
console.log(arr.lastIndexOf(555))




// includes() = vai retornar um boolean se um valor for encontrado

console.log(arr.includes(10))
//  true
console.log(arr.includes(1))
//  false




// find() = vai me retornar o primeiro valor encontrado que satisfaça uma condição.
// Caso não encontre nada, o retorno será = undefined

console.log(arr.find(function (el) {
    return el > 10
    // 20
}))



// findIndex() =  vai retornar o indice do primeiro valor do elemento do array encontrado
// caso não encontre nada, o retorno será = -1

console.log(arr.findIndex(function(el){
    return el > 10
    // 3
}))