// obj literal 
const obj1 = {
    nome: 'Kaio'
}
// sintaxe formal  (construtora)
const obj2 = new Object()
obj2.nome = "João"
// ou 
obj2["idade"] = 25

console.log(obj1)
console.log(obj2)

// acesso a propriedades de dados primitivos 
const str = 'minha string'
console.log(str.length)

// Por baixo dos panos, o interpretador do Js, converte esse string em um pbj do tipo string
// ai, o interpretador vai ter acesso à propriedade length desse obj, devolver a propriedade e descartar esse obj que ele criou temporariamente
// seria mais ou menos assim:
const str2 = new String("minha string 2")
console.log(str2)
console.log(str2.length)
// nesse caso, ele criou um objeto de verdade 


// O operador 'new' vai criar um objeto limpo com propriedades e métodos pré existentes 
const data1 = Date()
console.log(data1)
// Fri Jun 07 2024 15:35:03 GMT-0300 (Horário Padrão de Brasília)
console.log(typeof data1)
// string 

// O ideal para usar, quando trabalhar com datas é um objeto do tipo data:
const data2 = new Date()
console.log(data2) 
//2024-06-07T18:35:03.999Z
console.log(typeof data2) 
//object

// E como objeto, eu tenho vários metedos refentes a esse obejto, ex: getDate
const dia = data2.getDate()
console.log(dia) // 7 