'use strict'

//-------------------------------------------------------------------------------
// Read existing notes from existing storage

const getSavedTodos = () => {
    // Check for existing saved data
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []

    } catch (e) {
        return []
    }


}

//-------------------------------------------------------------------------------
// Save the todos to local storage

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//-------------------------------------------------------------------------------
// Remove a todo from the list

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1)
        todos.splice(todoIndex, 1)
}

//-------------------------------------------------------------------------------
// Render application todos

const renderTodos = (todos, filters) => {

    const todosElement = document.querySelector('#todos')

    const filterTodos = (hide) => {

        const todosFiltered = todos.filter((todo) => {
            return hide
                ? todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed
                : todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        })

    return todosFiltered

    }

    const filteredTodos = filterTodos(filters.hideCompleted)

    todosElement.innerHTML = ''

    const summary = generateSummaryDOM(filteredTodos, todos.length, filters.hideCompleted)

    todosElement.appendChild(summary)

    filteredTodos.forEach((todo) => {
        const todoElement = generateTodoDOM(todo)
        todosElement.appendChild(todoElement)
    })
    
}


//-------------------------------------------------------------------------------
// Update a todo to say it has been completed based on checking the checkbox

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo)
        todo.completed = !todo.completed

}

//-------------------------------------------------------------------------------
// Generate the DOM structure for the todo

const generateTodoDOM = (todo) => {

    const todoElement = document.createElement('label')
    const containerElement = document.createElement('div')
    const todoCompleted = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')


    // Set the todo input element as a checkbox
    todoCompleted.setAttribute('type', 'checkbox')
    todoCompleted.checked = todo.completed
    containerElement.appendChild(todoCompleted)

    // Add change event to completed checkbox
    todoCompleted.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup the todo text
    if (todo.text.length > 0)
        todoText.textContent = todo.text
    else
        todoText.textContent = 'Unamed note'

    // Append the todo text
    containerElement.appendChild(todoText)

    // Setup container
    todoElement.classList.add('list-item')
    containerElement.classList.add('list-item__container')
    todoElement.appendChild(containerElement)

    // Setup the todo button text and append
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoElement.appendChild(removeButton)

    // Add click event to button
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })





    // Return the lot
    return todoElement
}

//-------------------------------------------------------------------------------
// get DOM elements for list summary

const generateSummaryDOM = (todos, todoCount, hide) => {
    const filteredCount = todos.length
    const incompletedCount = todos.filter(todo => !todo.completed).length
    const summary = document.createElement('h2')
    summary.classList.add('list-title')

    const plural = filteredCount === 1 ? ' todo' : ' todos'

    if (!todoCount) {
        summary.textContent = `You have no todos`
    }
    else {
        if (hide) {
            incompletedCount 
                ? summary.textContent = `You have ${incompletedCount} ${plural} left` 
                : summary.textContent = 'All have been completed'
        }
        else {
            summary.textContent = `You have ${todoCount} ${plural}. `
            incompletedCount 
                ? summary.textContent += `You have ${incompletedCount} left to complete`
                : summary.textContent += 'All have been completed'
        }
    }

    return summary
}





