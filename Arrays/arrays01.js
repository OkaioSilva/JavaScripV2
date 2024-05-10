const arr = [1,5,10,'olá', true]

// some() e every() -> validação nos dados da array

let soNumeros = arr.every( function(el){
    // se apenas um elemento não for número, o retorno é falso
    return typeof el === 'number'

})
soNumeros = arr.some( function(el){
    // se apenas um elemento for número, o retorno é true
    return typeof el === 'number'

})

console.log(soNumeros)

/* ----------------------------------------------------------------- */

// filter() vai ser usado quando quero filtrar uma array
// filter() não altera a array original, ele vai retornar uma nova array
let arr1 = arr.filter(function(el, i, _arr){
    // mostrando o que é cada coisa
    console.log(el)
    console.log(i)
    console.log(_arr)
    return typeof el === 'number'
})

console.log(arr) // array original
console.log(arr1) // array nova retornada somente com números


/* -------------------------------------------------------------------------- */

// forEach() assim como o filter também não vai alterar a array original
// não tem valor de retorno = undefined

// mas quando que você vai usar foreach?
// Quando eu quero fazer qualquer coisa que uma iteração dentro do meu array

let arr2 = arr.forEach(function(el, i, _arr){
    console.log(el)
})
arr.forEach(function(el, i, _arr){
    console.log(i, " : ", el)
})

console.log(arr2) // undefined
console.log(arr) // original

/* ---------------------------------------------------------------------------- */

// map() : O método map ele vai retornar uma nova array com os dados transformados.

// como assim ?

let arr3 = arr1.map(function(el, i, _arr){
    return el * el
})

console.log(arr1) // arr1 com números
console.log(arr3) // numeros múltiplicados 
