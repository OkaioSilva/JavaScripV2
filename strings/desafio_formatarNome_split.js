/* 
    se for só o primeiro nome
    retornar = "primeiro nome"


    se o for nome e sobrenome
    // Silva, Kaio

    se nome completo
    // silva souza, Kaio

*/



function formatarNome(nomeCompleto){
    const nomeAsArray = nomeCompleto.split(' ')
    if(nomeAsArray.length === 1){
        return nomeCompleto
    }
    const primeiroNome = nomeAsArray.shift() // removi o primeiro nome
    //join() para transformar em string de novo, mas usando o spaço como caracter que vai concatenar os elementos da array
    return nomeAsArray.join(' ') + ', ' +  primeiroNome
}

console.log(formatarNome('Kaio')) // ['Kaio']
console.log(formatarNome('Kaio da silva')) // ['Kaio', 'da Silva']
console.log(formatarNome('Kaio da silva Souza')) // ['Kaio', 'da Silva', 'Souza']