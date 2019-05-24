import React from 'react'

const background = color => {
  return { backgroundColor: color}
}

export default ({toDo}) => (
  <div>
    <ol>
      {toDo.map( (item, index) => <li key={index} style={ background(item.color) } > {item.title} </li>)}
    </ol>
  </div>
)
