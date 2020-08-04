import React from 'react';
import './index.css'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //className: 'todo',
            status: false
        }
    }

    render() {
        return (
            <div  onClick={this.onClick} >
                <span className={` ${this.state.status?"todoDone":"todo"}`}>
                {this.props.content}
                </span>
                <button onClick={this.delete}>X</button>
            </div>
        )
    }

    onClick = (event) => {
        event.stopPropagation()
        this.setState({
            status: !this.state.status
        })
        console.log(this.state.status)
    }

    dropTodo = () => {
        this.props.deleteTodo(this.props.index)
        console.log(this.props.todoList)
    }

    delete = (event) => {
        this.dropTodo()
        event.stopPropagation()
    }


}

export default Todo