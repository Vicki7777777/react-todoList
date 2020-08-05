import {connect} from 'react-redux'
import TodoForm from '../components/TodoForm'
import {updateTodo} from "../api/api";
import {addTodo} from '../actions';

const mapDispatchToProps = (dispatch) => ({
  addTodo: (content,status) => {
    updateTodo(content,status).then(res=>{
      dispatch(addTodo(res.data,status))
    })
  }
})

export default connect(null, mapDispatchToProps)(TodoForm)