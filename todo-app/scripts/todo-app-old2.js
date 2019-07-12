const todos = [{ 
  text: 'Have breakfast', 
  completed: true 
}, { 
  text: 'Walk the dog',
  completed: true
}, {
  text: 'Start work', 
  completed: true
}, {
  text: 'Lunch meeting', 
  completed: false 
}, {
  text: 'Do shopping',
  completed: false
}]

// filter and display filtered todos via input/search


const filters = {
  searchText: ''
}

const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter( (todo) => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#todos').innerHTML = ''
  
  filteredTodos.forEach( (todo) => {
    const todoElement = document.createElement('p')
    todoElement.textContent = todo.text
    document.querySelector('#todos').appendChild(todoElement)
  })
}

renderTodos(todos, filters)


// List of thing completed/done

const thingsDone = todos.filter((todo) => {
  return todo.completed
})

let summary = document.createElement('h2')
summary.textContent = `You have completed ${thingsDone.length} things`
document.querySelector('body').appendChild(summary)

thingsDone.forEach( (todo) => {
  const newParagraph = document.createElement('p')
  newParagraph.textContent = todo.text
  document.querySelector('body').appendChild(newParagraph)
})

// List of things left to do

const thingsLeftToDo = todos.filter( (todo) => {
    return !todo.completed
  })

summary = document.createElement('h2')
summary.textContent = `You have ${thingsLeftToDo.length} things left to do`
document.querySelector('body').appendChild(summary)

thingsLeftToDo.forEach((todo) =>  {
  const newParagraph = document.createElement('p')
  newParagraph.textContent = todo.text
  document.querySelector('body').appendChild(newParagraph)
})




// Listen for new todo creation

document.querySelector('button').addEventListener('click',  (e) => {
  console.log("I'm adding a new todo...")
})

document.querySelector('#add-todo').addEventListener('click',  (e) => {
  e.target.textContent = 'The button was clicked'
})

document.querySelector('#completed-todos').addEventListener('click',  (e) => {
  e.target.textContent = 'The button was clicked'
})

// Listen for todo text change

document.querySelector('#search-text').addEventListener('input',  function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})




