import React from 'react';
import './App.css';
import TodoListContainer from '../src/containers/TodoListContainer'
import TodoFormContainer from '../src/containers/TodoFormContainer'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import TodoDoneContainer from "./containers/TodoDoneContainer";
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
//import Switch from "antd";

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <TodoListContainer/>
//                 <TodoFormContainer/>
//             </header>
//         </div>
//     );
// }


function App() {
    return (
        <Layout>
            <Header>
        <Router>

            <div>
                <ul>
                    <li ><Link to="/">ToDoHome</Link></li>
                    <li><Link to="/undone">ToDoDone</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <header>
                             <TodoListContainer/>
                        <TodoFormContainer/>
                        </header>
                    </Route>
                    <Route path="/undone">
                        <TodoDoneContainer/>
                    </Route>
                </Switch>
            </div>
        </Router>
            </Header>
        </Layout>
        // <div className="App">
        //     <header className="App-header">
        //         <TodoListContainer />
        //         <TodoFormContainer />
        //         <TodoDoneContainer />
        //     </header>
        // </div>
    );
}


export default App;
