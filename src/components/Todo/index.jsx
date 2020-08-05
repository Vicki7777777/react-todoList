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
        }
    }

    render() {
        return (
            <div  onClick={this.onClick} >
                <Paragraph editable={{ onChange: this.onChange }}  className={` ${this.props.status?"todoDone":"todo"}`}>
                        {this.props.content}
                </Paragraph>
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

    onChange = str => {
        this.setState({ str });
    };

}

export default Todo