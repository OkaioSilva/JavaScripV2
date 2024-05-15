let arr = [1,3,5,7,9]

// push() = acrescentar valores na array, no final

let nArr = arr.push(11,13)
console.log(nArr)
// length 7
console.log(arr)
// [1,3,5,7,9,11,13]


// pop() = vai retornar um elemento removido
// vai remover o último elemento
// vai modificar a array original

let ultimoItem =  arr.pop()
console.log(ultimoItem)
// 13
console.log(arr)
// [1,3,5,7,9,11]

// se precisar do último item sem remover ou alterar a array original
// use outros métodos clonando a array com o concat(), ou pegando o valor pelo índice
// let ultimoItem = arr[arr.length - 1]


// shift() = vai pegar o primeiro elemento

let primeiroItem = arr.shift()
console.log(primeiroItem)
// 1
console.log(arr)
// [3,5,7,9,11]



// unshift() = parecido com o push(), porém a inclusão ocorre no primeiro elemento

teste = arr.unshift(4,-1,2)
console.log(teste)
// 8
console.log(arr)
// [4,-1,2,3,5,7,9] 

// slice() = 'recorta' um pedaço do elemento da array

let arr2 = arr.slice(0, 4)
console.log(arr) 
console.log(arr2) // [4,-1,2,3]


// splice() = modifica a array original.
// adiciona elementos
// remove elementos
// em qualquer posição
// retorna os elementos removidos

let arr3 = arr.splice(2, 4, 'olá mundo') // a partir do 2, remova 4 e adicione "olá mundo" 
console.log('-------------------------')
console.log(arr) // [ 4, -1,'olá mundo' , 9, 11, ] nova array
console.log(arr3) // [ 2, 3, 5, 7 ] itens removidos