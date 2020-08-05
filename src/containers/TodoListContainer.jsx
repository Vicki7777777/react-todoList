import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {doneTodo, deleteTodo, initTodo} from "../actions";
import {dropTodo, putTodo} from "../api/api";

const mapStateToProps = (state) => ({
    todoList: state.todoList
})

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (todoID) => {
        dropTodo(todoID).then(() => {
            dispatch(deleteTodo(todoID))
        })
    },
    doneTodo: (id,status) => {
        putTodo(id,status).then(()=>{
            dispatch(doneTodo(id,status))
        })
    },
    // editTodo: (content,index) => {
    //   dispatch(editTodo(content,index))
    // },
    initTodo: (todos) => {
        dispatch(initTodo(todos))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)