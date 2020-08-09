import {connect} from 'react-redux'
import TodoDone from '../components/TodoDone'
import {dropTodo} from "../api/api";
import {deleteTodo} from "../actions";

const mapStateToProps = (state) => ({
    todoList: state.todoList
})



const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (todoID) => {
        dropTodo(todoID).then(() => {
            dispatch(deleteTodo(todoID))
        })
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(TodoDone)