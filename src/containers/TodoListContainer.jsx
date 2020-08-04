import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {addTodo, deleteTodo} from "../actions";

const mapStateToProps = (state) => ({
  todoList: state.todoList
})

const mapDispatchToProps = (dispatch) =>({
  deleteTodo: (todoID) => {
  dispatch(deleteTodo(todoID))
}
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)