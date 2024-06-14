/* 
replace(),                replaceAll(),
indexOf(),                lastIndexOf(),                  includes(),
slice(),                  substring(),                    split(),
toLowerCase(),            toUpperCase(),
valueOf(),                
trim(),                   trimEnd(),                      trimStart(),
padStart(),               padEnd(),
startsWith(),             endsWith(),
charAt(),                 charCodeAt(),                   length()
*/

// replace() - sibstituí uma string por outra
let str1 = "minha string"
console.log(str1.replace('h', 't'))
console.log(str1)

//indexOf() - vai me retornar a posição de determinada string que eu passar por parâmetro

console.log(str1.indexOf('string'))
// se procurar algo que não existe, o resultado será -1

// includes() se assemelha ao indexOf(), mas retorna um booleano 
console.log(str1.includes('string'))

// slice() e substring()
//Esses dois métodos são usados para criar pequenas strings, baseado numa string maior
console.log(str1.slice(2, 7))
console.log(str1.substring(2, 7))
// ambos aceitam 2 parâmetros, mas somente o slice aceita parâmetros negativos ( que significa pra começar do fim )
// o substring entende o negativo como zero
// outra diferença é que o substring consegue fazer a inversão caso o primeiro parâmetro seja maior que o segundo, slice não
console.log(str1.slice(8, 1)) // vai retornar uma string vazia
console.log(str1.substring(8, 1)) // inha st


// trim() vai remover os espaços em branco, no final e no início de uma string
console.log('--------------------------')
console.log(str1 +  '           sem trim       ')
console.log('--------------------------')
console.log(str1.trim())
console.log('--------------------------')
console.log(str1.trimEnd())
console.log('--------------------------')
console.log(str1.trimStart())


//padStart() e padEnd() - dizem respeito ao preenchimento da minha string
// aceitam 2 métodos, o primeiro é a quantidade que quero preencer e o segundo é com o que quero preencher

str1 = '0123456789'
console.log(str1.padStart(20, '*'))
// ou seja, agora o length da minha string é 20
console.log(str1)


// desafio = mascarar um número de telefone
console.log('--------------------------')
let telefone = '97969-0288'
// ex: (21)979****88

function mascararTel(numero){
    const hifem = numero.indexOf('-')
    const nInicial = numero.slice(0, hifem)
    const nFinal = numero.slice(hifem + 1)
    const ultimos = nFinal.slice(-2)

    return `${nInicial[0].padEnd(nInicial.length, '*')} - ${ultimos.padStart(nFinal.length, '*')}
    `
}

console.log(mascararTel(telefone))


// startsWith() e endsWith() - são funções que retornam um booleano
// E servem para verificar se uma sytring começa com outro caractere ou com outra string
// aceita também um segundo parâmetro opcional que é de qual posição começar a procurar
// já no endsWith, esse segundo parâmetro muda e serve para passar o tamanho da string

let str2 ='Hoje é quarta!'

console.log(str2.startsWith('Hoje'))
console.log(str2.endsWith('hoje'))

// charAt()
let str3 = "abcdefgh"
console.log(str3.charAt(1)) //b

//charCodeAt() - vai me retornar o código do da tabela de unicode
console.log(str3.charCodeAt(0)) // no caso, 'a' = 97




