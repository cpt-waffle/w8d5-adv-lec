import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
  }


  handleFormSubmit = evt => {
    evt.preventDefault();
    this.props.addToDo(evt.target.todo.value)
    evt.target.todo.value = ''
  }


  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input name="todo" type="text"/>
        <button>Add</button>
      </form>
    )
  }
}
