import React from 'react';
import * as axios from "axios";

class Text extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users: [],
            store: []
        }
    }


    componentDidMount(){
        axios.get('https://5e9ec500fb467500166c4658.mockapi.io/todos')
            .then(json => json.data.results.map(result => (
                {
                    name: `${result.name.first} ${result.name.last}`,
                    id: result.registered
                })))
            .then(newData => console.log(newData))
    }

    render() {
        const {users} = this.state
        return (
            <div className="Card">
                <div className="header">NAME LIST</div>
                <SearchBar searchFunc={(e) => this.filterNames(e)}/>
                <List usernames={users}/>
            </div>
        );
    }

}

export default  Text