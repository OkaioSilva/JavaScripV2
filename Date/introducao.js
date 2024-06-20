const data = new Date()

console.log(data.getDate())
console.log(data.getDay())
console.log(data.getFullYear())
console.log(data.getHours())
console.log(data.getMinutes())
console.log(data.getMonth())


// métodos estáticos

// Date.UTC() precisa passar parâmetros Date.UTC(2024,20,06)
// Date.now()
// Date.parse()

console.log(data.getTimezoneOffset()) // vai retornar, em minutos, a diferença do timezone universal



// como obter strings através de datas
console.log(data.toString())
console.log(data.toDateString())
console.log(data.toISOString())
console.log(data.toLocaleDateString())
console.log(data.toLocaleString())
console.log(data.toLocaleString('en-US', {hour12: true})) // false por padrão aqui no meu vs code
console.log(data.toLocaleString("pt-BR", {month: 'short', weekday: 'long', day: 'numeric', year: 'numeric'}))


