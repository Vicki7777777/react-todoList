const todoList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {content: action.content}]
    case 'DELETE_TODO':
      state.splice(action.todoID,1)
      return [...state]
    default:
      return state
  }
}

export default todoList