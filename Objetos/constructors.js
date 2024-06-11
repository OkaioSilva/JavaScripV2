// funções construtoras 
// uma convenção muito utilizada no mundo JavaScript é que quando você cria uma função construtora,
//você precisa começá-la com a letra maiúscula

// function Task(name){
//     this.name = name
//     this.createAt = new Date()
// }

// const task1 = new Task("Minha tarefa")
// console.log(task1)

// poderia criar um método para alterar esse nome
//exemplo:

// function Task(name){
//     this.name = name
//     this.createAt = new Date()
//     this.changeName = function(newName){
//         this.name = newName
//     }
// }

// const task1 = new Task("Minha tarefa")
// task1.changeName('tarefa atualizada')

// const task2 = new Task("Minha segunda tarefa")

// console.log(task1)
// console.log(task2)

// Digamos que eu não quero que o usuário altere o nome da tarefa direto

// function Task(name) {
//     this.name = name
//     this.createAt = new Date()
//     this.changeName = function (newName) {
//         this.name = newName
//     }
// }

// const task1 = new Task("Minha tarefa")
// task1.changeName('tarefa atualizada')

// dessa forma aqui:
// task1.name = "proibido"

// const task2 = new Task("Minha segunda tarefa")

// console.log(task1)
// console.log(task2)

// pquero que toda vez que o nome for alterado, altere também uma propriedade chamada updateAt

// function Task(name){
//     this.name = name
//     this.createAt = new Date()
//     this.updateAt = null
//     // e também 
//     this.changeName = function(newName){
//         this.name = newName
//         this.updateAt = new Date()
//     }
// }

// const task1 = new Task("Minha tarefa")
// task1.changeName('tarefa atualizada')

// const task2 = new Task("Minha segunda tarefa")

// console.log(task1)
// console.log(task2)

// fazendo isso, o usuário ainda consegue alterar o nome sem usar o changename, como impedir isso ?
// Assim, pode resolver:

function Task(name) {
    'use strict' 
    // o 'use strict' vai impedir que, se o operador não for usado, createdAt seja definido no escopo global
    // gerando um erro e não poluindo o escopo global
   
    let _name = name // lembrando que essa variável só existe nesse escopo, então não tenho acesso fora dele
    // o que fazer então ?
    // posso criar um método para recuperar esse nome...
    this.updateAt = null
    this.createAt = new Date()
    this.changeName = function (newName) {
        // além do método criado para recuperar a variável
        // posso criar uma verificação
        //Se nada for passado por parâmetro, a função não faz nada

        if(newName){
            // se receber um novo nome, atualiza o nome e data, se não não faz nada
            _name = newName
            this.updateAt = new Date()
        }
    }
    this.getName = function () {
        return _name
    }
}

const task1 = new Task("Minha tarefa")
task1.changeName('tarefa atualizada')

const task2 = new Task("Minha segunda tarefa")

console.log(task1)
// aqui, posso usar a função criada para recuperar o a variável _name
console.log(task1.getName())
console.log(task2)