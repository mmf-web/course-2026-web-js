import React from 'react'
import './App.css'

export default class App extends React.Component {
  state = {
    text: '',
    isSorted: false,
    todos: generateTodos(10), // [],
  }

  // То же самое, что и state = { ... }
  // constructor() {
  //   super()
  //   this.state = { text: '' }
  // }

  handleChangeText = (e) => this.setState({ text: e.target.value })
  handleToggleSort = (e) => this.setState({ isSorted: !this.state.isSorted })

  // ВАЖНО!!! Все setState с todos лучше
  // сделать функциональными this.setState(prev => ...)
  handleComplete = (id) => {
    this.setState({ todos: this.state.todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)) })
  }

  handleToggle = (id) => (e) => {
    const done = e.target.checked
    this.setState(({ todos }) => ({ todos: todos.map((t) => (t.id === id ? { ...t, done } : t)) }))
  }

  handleDelTodo = (id) => () => {
    this.setState(({ todos }) => ({ todos: todos.filter((t) => t.id !== id) }))
  }

  handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: this.state.text,
      done: false,
    }
    this.setState({ todos: [newTodo, ...this.state.todos] })
  }

  render() {
    // const { text, isSorted, todos } = this.state; //Чтобы не писать this.state по 100 раз.

    const todosToRender = this.state.isSorted ? this.state.todos.toSorted((a, b) => a.done - b.done) : this.state.todos

    return (
      <div className="App">
        <h1>ToDo List</h1>
        <input type="text" value={this.state.text} onChange={this.handleChangeText} />
        <input type="button" value="Add..." onClick={this.handleAddTodo} />
        <br />
        сначала невыполненные
        <input type="checkbox" checked={this.state.isSorted} onClick={this.handleToggleSort} />
        <div>всего задач {this.state.todos.length}</div>
        <div>сделано задач {this.state.todos.filter((t) => t.done).length}</div>
        <hr />
        <div className="todos">
          {todosToRender.map((t) => (
            <div>
              <input
                type="checkbox"
                checked={t.done}
                onChange={
                  this.handleToggle(t.id)
                  /* можно так onChange={() => this.handleComplete(t.id)}*/
                }
              />
              <span>
                {t.id} --- {t.text}
                <button onClick={this.handleDelTodo(t.id)}> Del...</button>
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

function generateTodos(N = 10) {
  return Array.from({ length: N }, (el, i) => ({
    id: Date.now() + i,
    text: `Todo #${i + 1}`,
    done: Math.random() < 0.5,
  }))
}
