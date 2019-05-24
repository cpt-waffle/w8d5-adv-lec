import React from 'react'

export default ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <input name="todo" type="text"/>
    <button>Add</button>
  </form>
)
