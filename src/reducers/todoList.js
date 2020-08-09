const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.content]
        case 'DELETE_TODO':
            return state.filter((item) => item.id !== action.todoID)

        case 'DONE_TODO':
            const data = state.find(todo => todo.id === action.id)
            if (data) {
                data.status = action.status
            }
            return [...state]

        case 'INIT_TODO':
            return action.todos
        default:
            return state


    }
}

export default todoList