import {connect} from 'react-redux'
import TodoDone from '../components/TodoDone'

const mapStateToProps = (state) => ({
    todoList: state.todoList
})


export default connect(mapStateToProps)(TodoDone)