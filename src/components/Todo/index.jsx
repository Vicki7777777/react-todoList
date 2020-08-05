import React from 'react';
import './index.css'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div  onClick={this.onClick} >
                <span className={` ${this.props.status?"todoDone":"todo"}`}>
                {this.props.content}
                </span>
                <button onClick={this.delete}>X</button>
            </div>
        )
    }

    onClick = (event) => {
        event.stopPropagation()
        this.props.doneTodo(this.props.status,this.props.index)
    }

    dropTodo = () => {
        this.props.deleteTodo(this.props.index)
    }

    delete = (event) => {
        this.dropTodo()
        event.stopPropagation()
    }


}

export default Todo