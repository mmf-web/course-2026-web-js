const todoNameInputEl = document.querySelector('#todo-name')
const todoAddBtnEl = document.querySelector('#todo-add-btn')
const todoContainerEl = document.querySelector('#todo-container')

/** @type Array */
let todos = JSON.parse(localStorage.getItem('todos')) || []
setInterval(() => localStorage.setItem('todos', JSON.stringify(todos)), 1000)

renderTodos()

function addTodo() {
  const todoName = todoNameInputEl.value
  // TODO: validate todo name
  todos.push({
    name: todoName,
    done: false,
  })
  todoNameInputEl.value = ''

  renderTodos()
}

todoAddBtnEl.addEventListener('click', addTodo)

document.addEventListener('click', (event) => {
  // TODO: check that input is checkbox
  if (event.target.nodeName !== 'INPUT') {
    return
  }

  const nextDone = event.target.checked
  const todoIndex = +event.target.dataset.index

  todos[todoIndex].done = nextDone
})

function renderTodos() {
  todoContainerEl.innerHTML = todos.reduce(
    (html, todo, i) =>
      html +
      `
      <div>
        <input ${todo.done ? 'checked=""' : ''} type="checkbox" data-index="${i}" />
        <span>${todo.name}</span>
      </div>
    `,
    '',
  )
}
