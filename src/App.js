import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
import Todo from './ToDo/'
import Done from './Done/'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 'test',
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
    if ( num === 1 )
      return 'green'

    else if (num === 2)
      return 'orange'

    else if (num === 3)
      return 'blue'

    else if (num === 5)
      return 'green'

    else if (num === 6)
      return 'yellow'

    else if (num === 7)
      return 'navy'

    else if (num === 8)
      return 'purple'

    else if (num === 9)
      return 'silver'

    else
      return 'white'

  }


  handleFormSubmit = evt => {
    evt.preventDefault();
    let value = evt.target.todo.value
    const todoArr = this.state.toDo
    todoArr.push({title: value, color: this.randomColor(Math.floor(Math.random() * 10))})
    this.setState({todo: todoArr})
    evt.target.todo.value = ''
  }

  remove = () => {

  }

  render() {
    return (
      <div className="center">
        <Router>
          <Link to="/">ToDo</Link>
          <Link to="/done">Done</Link>

          <Route exact path="/" component={() => <Todo toDo={this.state.toDo} handleFormSubmit={this.handleFormSubmit} />} />
          <Route path="/done" component={() =>  <Done x={this.state.x}/> } />

        </Router>
      </div>
    )
  }
}

//          <Todo toDo={this.state.toDo} handleFormSubmit={this.handleFormSubmit} />