import React from "react";
import Todo from "../Todo";

class TodoDone extends React.Component {
    constructor(props) {
        super(props)
    }

    deleteTodo = (index) => {
        this.props.deleteTodo(index)
    }


    doneTodo = (id,status) => {
        status =! status
        this.props.doneTodo(id,status)
    }



    render() {
        return (
            <div>
                {this.props.todoList.filter(item => item.status === true).map((item, index) =>
                    <Todo key={index} todoList={item}
                          index={item.id}
                          status={item.status}
                          deleteTodo={this.deleteTodo}
                          content={item.content}/>)
                }
            </div>
        )
    }



}



export default TodoDone