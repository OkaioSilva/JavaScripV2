let arr = [1,2,3]

// reverse() = inverte a ordem dos elementos da array e modifica a array original


/* arr.reverse()
console.log(arr)
 */

//reduce() = vai fazer uma interação em cada elemento, como se fosse um loop
// o objetivo do reduce() é: quando eu quero retornar um único valor 
// seja número, array, string...
let j = 0;
let soma = arr.reduce(function(acumulador, atual, i, _arr){
    console.log('i: ', i)
    console.log('j: ', j++)
    console.log('acumulador: ', acumulador, "--- atual: ", atual)
    return acumulador + atual 
} // aqui pode por o valor de retorno. exemplo: " ", {}
)
console.log(soma)
console.log(arr)


const nomes = ['Kaio', 'Maria', 'Milena', 'josé', 'Kaique']

// quero pegar as iniciais dos nomes. Ex.: {K: 2, M: 2, J: 1}
let nomesPorOrdem = nomes.reduce(function(nomes, nomeAtual){
    /* 
        1-
    nomes = {}
    nomeAtual = 'Kaio' -> primeiraLetra = nomeAtula[0] = 'K'
    return {K: 1}
        2-
    nomes = {K: 1}
    nomeAtual = 'Maria' -> primeiraLetra = nomeAtula[0] = 'M'
    return {K: 1, M: 1}
       
        3-
    nomes = {K: 1, M: 1}
    nomeAtual = 'Milena' -> primeiraLetra = nomeAtula[0] = 'M'
    return {K: 1, M: 2}
        4-
    nomes = {K: 1, M: 2}
    nomeAtual = 'José' -> primeiraLetra = nomeAtula[0] = 'J'
    return {K: 1, M: 2, J: 1}
        5-
    nomes = {K: 1, M: 2, J: 1}
    nomeAtual = 'Kaique' -> primeiraLetra = nomeAtula[0] = 'K'
    return {K: 2, M: 2, J: 1}
    */

    let primeriaLetra = nomeAtual[0]
    if(nomes[primeriaLetra]){
        // se existir mais de uma inicial igual, soma e mostra o resultado
        nomes[primeriaLetra]++
    }else{
        // se não existir, nomes = 1, pois significa que já encontrou 1
        nomes[primeriaLetra] = 1
    }
    return nomes
}, {})
console.log(nomesPorOrdem) //{ K: 2, M: 2, j: 1 }


