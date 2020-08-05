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


export const doneTodo = (id,status) => {
  return {
    type: 'DONE_TODO',
    id: id,
    status: status
  }
}


// export const editTodo = (content） => {
//   return {
//     type: 'EDIT_TODO',
//     content: content
//   }
// }


export const initTodo = (todos) =>{
  return {
    type: 'INIT_TODO',
    todos: todos
  }
}
