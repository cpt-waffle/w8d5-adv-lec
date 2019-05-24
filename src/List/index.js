import React, { Component } from 'react'

export default class List extends Component {
  constructor(props) {
    super(props)
  }

  background = color => {
    return { backgroundColor: color}
  }

  render() {
    return (
      <div>
        <ol>
          {this.props.toDo.map( (item, index) => <li key={index} style={ this.background(item.color) } > {item.title} </li>)}
        </ol>
      </div>
    )
  }
}
