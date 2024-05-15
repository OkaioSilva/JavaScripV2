let arr1 = [1, 2, 3]
let arr2 = [5, 6, 7]

// toString() = vai mostrar uma representação em string do meu array

console.log(arr1.toString())
// 1,2,3


// join() = semelhante ao toString(), vai me retornar uma representação em string.

console.log(arr1.join())
// 1,2,3

// a diferença é que posso passar um parâmetro, sendo ele o caractere que vai separar os valores

console.log(arr1.join(' - '))
// 1 - 2 - 3



//concat() = serve para juntar arrays
let arr3 = arr1.concat(arr2)
// posso adicionar mais elementos para concatenar
/* let arr3 = arr1.concat(arr2, 4 , 10, 12, 15) 
    retorno = 1,2,3,5,6,7,4,10,12,15
*/

console.log(arr1)
console.log(arr2)
console.log(arr3) // junção dos arrays 1 e 2

