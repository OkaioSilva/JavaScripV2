const arr = [1,2,3]
const obj = {
    nome: 'Maria', 
    idade: '28',
    email: 'maria@server.com'
}

// loop for...in serve para percorrer objetos

for(let prop in obj){
    console.log(prop+':') // propriedades do meu objeto = nome, idade, email
    console.log(obj[prop]) // valor de cada propriedade = Maria, 28, maria@server.com
}


// o loop for...of serve para fazer a interação de uma array
// retornando o valor dos elementos do array
// for(variavel  of  array){
//  corpo   
// }

for(n of arr){
    console.log(n)
}