export const addTodo = (content,status) => {
  return {
    type: 'ADD_TODO',
    content: content,
    status: status
  }
}

export const deleteTodo = (index) => {
  return {
    type: 'DELETE_TODO',
    todoID: index
  }
}


export const doneTodo = (status,index) => {
  return {
    type: 'DONE_TODO',
    status: status,
    index: index
  }
}


export const editTodo = (content,index) => {
  return {
    type: 'EDIT_TODO',
    content: content,
    index: index
  }
}


export const initTodo = (todos) =>{
  return {
    type: 'INIT_TODO',
    todos: todos
  }
}
