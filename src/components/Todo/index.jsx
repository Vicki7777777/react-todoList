import React from 'react';
import './index.css'
import {
    DeleteOutlined
} from '@ant-design/icons';
import { Typography } from 'antd';
import index from "../../reducers";
const { Paragraph } = Typography;
class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            str: null
        }
    }

    render() {
        return (
            <div  onClick={this.onClick} >
                <span  className={` ${this.props.status?"todoDone":"todo"}`}>
                        {this.props.content}
                </span>
                <button onClick={this.delete}><DeleteOutlined /></button>
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

    onChange = (event,index) => {
        this.setState({ str: event });
        this.props.editTodo(this.state.str,index)
    }

}

export default Todo