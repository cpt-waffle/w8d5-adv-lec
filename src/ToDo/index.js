import React from 'react'
import List from '../List/'
import Form from '../Form/'


export default ({toDo, handleFormSubmit}) => (
  <div>
    <h2>To Do List</h2>
    <List toDo={toDo} />
    <Form handleSubmit={handleFormSubmit} />
  </div>
)