; (function () {
    //ARMAZENAR O DOM EM VARIÁVEIS
    const itemInput = document.getElementById('item-input')
    const todoAddForm = document.getElementById('todo-add')
    const todoListUl = document.getElementById('todo-list')
    const todoItemLi = document.getElementsByClassName('todo-item')

    let arr = [
        {
            nome: 'task 1',
            createAt: Date.now(),
            completed: false
        }
    ]


    function addEventLi(li){
        li.addEventListener('click', function(e){
            console.log(this)
        })
    }

    function addTask(task) {
        const li = document.createElement('li')
        const p = document.createElement('p')
        li.className = 'todo-item'
        p.className = 'task-name'
        p.textContent = task
        li.appendChild(p)
        todoListUl.appendChild(li)

        addEventLi(li)
    }

    todoAddForm.addEventListener('submit', function (e) {
        e.preventDefault
        console.log(itemInput.value)
       // todoListUl.innerHTML += `
       // <li class="todo-item">
       //     <p class="task-name">${itemInput.value}</p>
       // </li>
       // `
        addTask(itemInput.value)
        itemInput.value = ''
        itemInput.focus()
    });
    [...todoItemLi].forEach(li => {
        addEventLi(li)
    }) 
})()