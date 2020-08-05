import React from 'react';
import './index.css'
import {
    DeleteOutlined
} from '@ant-design/icons';
import { Typography } from 'antd';
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
        this.props.doneTodo(this.props.index,this.props.status)
    }

    delete = (event) => {
        this.props.deleteTodo(this.props.index)
        event.stopPropagation()
    }

    // onChange = (event,index) => {
    //     this.setState({ str: event });
    //     this.props.editTodo(this.state.str,index)
    // }

}

export default Todo