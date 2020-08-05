import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {doneTodo, deleteTodo} from "../actions";

const mapStateToProps = (state) => ({
  todoList: state.todoList
})

const mapDispatchToProps = (dispatch) =>({
  deleteTodo: (todoID) => {
  dispatch(deleteTodo(todoID))
},
  doneTodo: (status,index) => {
    dispatch(doneTodo(status,index))
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)