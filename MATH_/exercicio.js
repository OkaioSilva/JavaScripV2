function getRandomNumber(inicio = 0, fim = 10, integer = true){
    let nInicial = Math.random() * (fim - inicio + 1) + inicio
    if(integer === true){
        return parseInt(nInicial)
    }else{
        return nInicial
    }
}

console.log(getRandomNumber(2, 3))