import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {doneTodo, deleteTodo, editTodo, addTodo, initTodo} from "../actions";

const mapStateToProps = (state) => ({
  todoList: state.todoList
})

const mapDispatchToProps = (dispatch) =>({
  deleteTodo: (todoID) => {
  dispatch(deleteTodo(todoID))
},
  doneTodo: (status,index) => {
    dispatch(doneTodo(status,index))
  },
  editTodo: (content,index) => {
    dispatch(editTodo(content,index))
  },
  initTodo: (todos) => {
    dispatch(initTodo(todos))
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)