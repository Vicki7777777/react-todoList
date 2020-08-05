export const addTodo = (content,status) => {
  return {
    type: 'ADD_TODO',
    content: content,
    status: status
  }
}

export const deleteTodo = (index,status) => {
  return {
    type: 'DELETE_TODO',
    todoID: index,
    status: status
  }
}


export const doneTodo = (status,index) => {
  return {
    type: 'DONE_TODO',
    status: status,
    index: index
  }
}
