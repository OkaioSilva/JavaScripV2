/* 
    construa uma função para calcular a média

    requisitos:
    Pode receber um ou mais valores númericos;
    Deve retornar um único número;
    Deve gerar um erro, caso não receba um número como parâmetro;
    Deve retornar zero, caso não receba nenhuma parâmetro.

*/

function calMedia() {
    let soma = 0;
    let numeros = arguments.length;
    /* let media = 0 */
    for (let i = 0; i < numeros; i++) {
        if (typeof arguments[i] !== 'number') {
            throw Error('Somente números')
        }
        soma += arguments[i]
    }
    if (numeros === 0) {
        return 0
    }
    let media = soma / numeros

    return media

}

console.log(calMedia(5, 5, 10, 20))
console.log(calMedia())
console.log(calMedia(2, 4, 10, 25, 8, 15))
console.log(calMedia('5', '20'))
