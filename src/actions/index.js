export const addTodo = (content) => {
  return {
    type: 'ADD_TODO',
    content: content
  }
}

export const deleteTodo = (index) => {
  return {
    type: 'DELETE_TODO',
    todoID: index
  }
}
