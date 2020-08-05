import React from 'react'
import Todo from '../Todo'
import {getAllTodos} from "../../api/api";

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    deleteTodo = (index) => {
        this.props.deleteTodo(index)
    }

    doneTodo = (id,status) => {
        status =! status
        this.props.doneTodo(id,status)
        console.log('test',status)
    }

    componentDidMount() {
        getAllTodos().then( response =>{
            this.props.initTodo(response.data)
        })
    }

    render() {
        return (
            <div>
                <h3>Todo List</h3>
                {this.props.todoList.map((item,index) => {
                    return <Todo key={item.id}
                                 todoList={item}
                          index={item.id}
                          status={item.status}
                          doneTodo={this.doneTodo}
                          deleteTodo={this.deleteTodo}
                          content={item.content}/>
                })


                }
            </div>
        )
    }

}

export default TodoList