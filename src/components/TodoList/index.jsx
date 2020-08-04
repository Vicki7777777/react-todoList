import React from 'react'
import Todo from '../Todo'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    deleteTodo = (index) => {
        this.props.deleteTodo(index)
    }

    render() {
        return (
            <div>
                <h3>Todo List</h3>
                {this.props.todoList.map((item, index) =>
                    <Todo key={index}
                          index={index}
                          deleteTodo={this.deleteTodo}
                          content={item.content}/>)
                }
            </div>
        )
    }

}

export default TodoList