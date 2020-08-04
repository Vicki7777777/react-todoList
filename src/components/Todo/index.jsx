import React from 'react';
import './index.css'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            className: 'todo'
        }
    }

    render() {
        return (
            <div className={this.state.className} onClick={this.onClick}>
                {this.props.content}
                <button onClick={this.delete}>X</button>
            </div>
        )
    }

    onClick = (event) => {
        event.stopPropagation()
    }

    dropTodo = () => {
        this.props.deleteTodo(this.props.index)
        console.log(this.props.todoList)
        // this.props.deleteTodo(this.state.status,this.state.index)
    }

    delete = (event) => {
        this.dropTodo()
        event.stopPropagation()
    }


}

export default Todo