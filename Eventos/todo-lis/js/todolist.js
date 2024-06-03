; (function () {
    //ARMAZENAR O DOM EM VARIÁVEIS
    const itemInput = document.getElementById('item-input')
    const todoAddForm = document.getElementById('todo-add')
    const ul = document.getElementById('todo-list')
    //const todoItemLi = document.getElementsByClassName('todo-item')

    let arrTasks = [
        {
            name: 'task 1',
            createAt: Date.now(),
            completed: false
        }
    ]


    function addEventLi(li) {
        li.addEventListener('click', function (e) {
            console.log(this)
        })
    }

    function generateLiTask(obj) {
        const li = document.createElement('li')
        li.className = 'todo-item'
        const p = document.createElement('p')
        p.className = 'task-name'
        p.textContent = obj.name
        li.appendChild(p)
        addEventLi(li)
        return li
    }

    function renderTask() {
        ul.innerHTML = ''
        arrTasks.forEach(task => {
            ul.appendChild(generateLiTask(task))
        })
    }

    function addTask(task) {
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false
        })
    }

    todoAddForm.addEventListener('submit', function (e) {
        e.preventDefault
        console.log(itemInput.value)
        // ul.innerHTML += `
        // <li class="todo-item">
        //     <p class="task-name">${itemInput.value}</p>
        // </li>
        // `
        addTask(itemInput.value);
        renderTask()
        itemInput.value = ''
        itemInput.focus()
    });
    renderTask()
})()