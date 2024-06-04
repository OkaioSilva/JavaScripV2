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
        const p = document.createElement('p')
        const button = document.createElement('button')
        const editButton = document.createElement('i')
        const deleteButton = document.createElement('i')
        

        li.className = 'todo-item'

        button.className = 'button-check'
        button.innerHTML = '<i class="fas fa-check displayNone"></i>'
        // i.className = 'fas fa-check'

        li.appendChild(button)

        p.className = 'task-name'
        p.textContent = obj.name
        li.appendChild(p)
        editButton.className = "fas fa-edit"
        li.appendChild(editButton)

        const containerEdit = document.createElement('div')
        containerEdit.className = 'editContainer'
        const inputEdit = document.createElement('input')
        inputEdit.setAttribute('type', 'text')
        inputEdit.className = 'editInput'
        containerEdit.appendChild(inputEdit)
        
        const containerEditButton = document.createElement('button')
        containerEditButton.className = 'editButton'
        containerEditButton.textContent = 'Edit'
        containerEdit.appendChild(containerEditButton)
        
        const containerCancelButton = document.createElement('button')
        containerCancelButton.className = 'cancelButton'
        containerCancelButton.textContent = 'Cancel'
        containerEdit.appendChild(containerCancelButton)

        li.appendChild(containerEdit)
        
        deleteButton.className = "fas fa-trash-alt"
        inputEdit.className = 'editInput'
        //li.appendChild(deleteButton)


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