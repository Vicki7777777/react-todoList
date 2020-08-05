const todoList = (state = [], action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        content: action.content,
        status: action.status
      }]
    case 'DELETE_TODO':
      return state.filter((item) => item.id !== action.todoID )

    case 'DONE_TODO':
      state[action.index].status= !action.status
      return [...state]

    case 'EDIT_TODO':
      state[action.index].content= !action.content
      return [...state]

    case 'INIT_TODO':
      return  action.todos
    default:
      return state
  }
}

export default todoList