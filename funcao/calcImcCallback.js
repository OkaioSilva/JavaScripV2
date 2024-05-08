function calcularIMC(peso, altura, cb) {
    if (peso === undefined || altura === undefined) {
        throw Error('Somente números')
    }
    let imc = peso / (altura * altura)

    if (imc < 16.9) {
        console.log(`Seu imc é de: ${imc}`)
    } else if (imc < 18.4) {
        console.log(`Seu imc é de: ${imc}`)
    } else if (imc < 24.9) {
        console.log(`Seu imc é de: ${imc}`)
    } else if (imc < 29.9) {
        console.log(`Seu imc é de ${imc}`)
    } else if (imc < 34.9) {
        console.log(`Seu imc é de ${imc}`)
    } else if (imc < 40) {
        console.log(`Seu imc é de ${imc}`)
    } else {
        console.log(`Seu imc é de ${imc}`)
    }
    cb(imc)
    return imc
}

const classificaImc = function (imc) {
    /* let cf = imc */
    if (imc < 16.9) {
        console.log(`Muito abaixo do peso.`)
    } else if (imc < 18.4) {
        console.log(`Abaixo do peso.`)
    } else if (imc < 24.9) {
        console.log(`Peso normal.`)
    } else if (imc < 29.9) {
        console.log(`Acima do peso.`)
    } else if (imc < 34.9) {
        console.log(`Obesidade grau I.`)
    } else if (imc < 40) {
        console.log(`Obesidade grau II.`)
    } else {
        console.log(`Obesidade grau III.`)
    }
}

calcularIMC(65, 1.67, classificaImc)