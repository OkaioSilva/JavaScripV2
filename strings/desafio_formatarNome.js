/* 
    se for só o primeiro nome
    retornar = "primeiro nome"


    se o for nome e sobrenome
    // Silva, Kaio

    se nome completo
    // silva souza, Kaio

*/



function formatarNome(nomeCompleto){
    nomeCompleto = nomeCompleto.trim()
    const primeiroEspaço = nomeCompleto.indexOf(" ")
    
    if(primeiroEspaço < 0){
        return nomeCompleto
    }
    const nome = nomeCompleto.slice(0, primeiroEspaço)
    const sobrenome = nomeCompleto.slice(primeiroEspaço + 1)

    // return `${nome.charAt(0).padEnd(nome.lenght, ', ')} ${sobrenome.slice(- sobrenome.lenght)}`
    return sobrenome + ', ' + nome
}

console.log(formatarNome('Kaio'))
console.log(formatarNome('Kaio da silva'))
console.log(formatarNome('Kaio da silva Souza'))