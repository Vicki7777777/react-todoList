import React from "react";
import Todo from "../Todo";

class TodoDone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    deleteTodo = (index) => {
        this.props.deleteTodo(index)
    }


    render() {
        return (
            <div>
                {this.props.todoList.filter(item => item.status === true).map((item, index) =>
                    <Todo key={index}
                          index={index}
                          status={item.status}
                          deleteTodo={this.deleteTodo}
                          content={item.content}/>)
                }
            </div>
        )
    }



}



export default TodoDone