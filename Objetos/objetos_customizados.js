// Por que devemos usar funções constrtutoras de objetos?

// Primeiro, vamos mostrar um problema
// objetos literais para entender o conceito 


// const task1 = {
//     name: "tak1",
//     createdAt: new Date(),
//     completed: false
// }
// const task2 = {
//     name: "tak2",
//     createdAt: new Date(),
//     completed: false
// }
// console.log(task2)
// console.log(task1)

// Não há problema algum em trabalhar com objetos escritos dessa maneira
// E se eu tivesse um lista com mais de 20 tarefas, poderia criar 20 objetos litarais desse
// mas isso tem um pequeno problema. Se por acasado, eu tiver que mudar alguma coisa na estrutura desse objeto?
// Teria que alterar alterar em todos os objetos que já existem.. Ex:

// const task1 = {
//     name: "tak1",
//     createdAt: new Date(),
//     updateAt: null, 
//     // ou seja, se eu tivesse 10 objetos, precisaria copiar e colar essa propriedade nos 10
//     completed: false
//     }
//     task1.name = 'task 1 updated'
//     task1.updateAt = new Date()
//     console.log(task1)

    // o ideal aqui é eu ter uma função que vai receber um novo valor
    // e essa função vai atualizar o name e o updateAt
    function changeName(name){
        this.name = 'task 1 mudada pelo this'
        // como o this é dinâmico, nesse caso, aqui ele vai apontar para o próprio objeto
    }
    const task1 = {
        name: "tak1",
        createdAt: new Date(),
        updateAt: null, 
        completed: false,
        changeName
        }
        
        task1.changeName('kaio')
        console.log(task1)

        // dessa forma, já melhorou um poucpo porque tenho uma função externa, daí basta que eu aponte a propriedade dentro de cada objto chamando a função
        // mas ainda não é o ideal 
        // O ideal seria que eu criasse uma maneira de gerar esses objetos para mim e retornar um objeto. É exatamente isso que faz as funções construtoras 