import React, { Component } from 'react'
import './App.css'
import List from './List/'
import Form from './Form/'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDo: [
        {title: 'buy milk', color: 'red'},
        {title: 'wash clothes', color: 'green'},
        {title: 'buy milk', color: 'yellow'}
      ],
      done: [
      ],
    }
  }


  randomColor = num => {
    if ( num == 1 )
      return 'green'

    else if (num == 2)
      return 'orange'

    else if (num == 3)
      return 'blue'

    else if (num == 5)
      return 'green'

    else if (num == 6)
      return 'yellow'

    else if (num == 7)
      return 'navy'

    else if (num == 8)
      return 'purple'

    else if (num == 9)
      return 'silver'

    else
      return 'white'

  }

  addToDo = (item) => {
    const todoArr = this.state.toDo
    todoArr.push({title: item, color: this.randomColor(Math.floor(Math.random() * 10))})
    this.setState({todo: todoArr})
  }

  remove = () => {

  }

  render() {
    return (
      <div className="center">
        <h2>To Do List</h2>
        <List toDo={this.state.toDo} />
        <Form addToDo={this.addToDo} />
      </div>
    )
  }
}
