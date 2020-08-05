import {connect} from 'react-redux'
import TodoForm from '../components/TodoForm'
import {addTodo} from '../actions'

const mapDispatchToProps = (dispatch) => ({
  addTodo: (content,status) => {
    dispatch(addTodo(content,status))
  }
})

export default connect(null, mapDispatchToProps)(TodoForm)