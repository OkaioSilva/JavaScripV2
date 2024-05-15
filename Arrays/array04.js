let arr1 = ['a', 'b', 'c']
let arr2 = arr1

// estou pondo duas variáveis que apontam para o mesmo objeto

// tanto é que:

arr2[arr2.length] = 'novo valor'

console.log(arr1)
// [ 'a', 'b', 'c', 'novo valor' ]
console.log(arr2)
//[ 'a', 'b', 'c', 'novo valor' ]


// agora, se eu quiser criar uma cópia do array, sem alterar o valor da array original

/* 
let arr1 = ['a', 'b', 'c']
let arr2 = [].concat(arr1)

a array vazia é uma outra posição na memória da máquina


arr2[arr2.length] = 'novo valor'

console.log(arr1)
// [ 'a', 'b', 'c']
console.log(arr2)
//[ 'a', 'b', 'c', 'novo valor' ]


*/
