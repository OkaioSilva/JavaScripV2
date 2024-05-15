const numeros = [1,3,4,1,4,5,3,8,9]
// o retorno do desafio é um array com os números sem ser repetido
// numerosUnicos = [1,3,4,5,8,9]

let numerosUnicos = numeros.reduce(function(numeros, numeroAtual){
    // se "numeros.indexOf(numeroAtua) < 0, no caso - 1.
    //ou seja, se não existir(-1 = não existe) adiciona = numeros.push(numeroAtual)"
    if(numeros.indexOf(numeroAtual) < 0){
        numeros.push(numeroAtual)
    }
    return numeros 
}, [])

console.log(numerosUnicos)