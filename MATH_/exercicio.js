function getRandomNumber(inicio = 0, fim = 10, integer = true){
    let nInicial = Math.random() * (fim - inicio + 1) + inicio
    return integer ? parseInt(nInicial) : nInicial
}

console.log(getRandomNumber(2, 3, false))