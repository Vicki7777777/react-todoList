const todoList = (state = [], action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        content: action.content,
        status: action.status
      }]
    case 'DELETE_TODO':
      state.splice(action.todoID,1)
          return [...state]

    case 'DONE_TODO':
      state[action.index].status= !action.status
      return [...state]

    default:
      return state
  }
}

export default todoList