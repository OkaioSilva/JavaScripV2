// Sempre que você vê nos seus códigos ou na internet alguma coisa do tipo com três pontos desse jeito "..."
// está se referindo a spread operator ou rest operator

// o que ele faz? digamos que ele quebra a array e passa os valores nela separados por vígula.

const arr = [1,2,3]

function sum(){
    console.log(arguments)
    console.log(arguments.length)
}
sum(1,2,3)
// [Arguments] { '0': 1, '1': 2, '2': 3 }
// arguments.length = 3
sum(arr) 
// [Arguments] { '0': [ 1, 2, 3 ] }
// arguments.length = 1

// spread

sum(...[1,2,3]) // { '0': 1, '1': 2, '2': 3 }
//ou
sum(...arr) 
