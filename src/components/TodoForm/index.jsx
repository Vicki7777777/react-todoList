import React from 'react'
import { Button, Radio } from 'antd';
class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      status: false
    }
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange}/>
        <Button onClick={this.onSubmit}>add</Button>
      </div>
    )
  }

  onSubmit = () => {
    this.props.addTodo(this.state.content,this.state.status)
  }

  onChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

}

export default TodoForm